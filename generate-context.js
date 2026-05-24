#!/usr/bin/env node

/**
 * Codebase Context Generator
 * Generates a full Markdown context document of a codebase,
 * including a folder structure tree and the contents of all text files.
 * 
 * Usage:
 *   node generate-context.js [options]
 * 
 * Options:
 *   --dir <path>       Target directory to scan (default: current directory)
 *   --out <path>       Output Markdown file path (default: full_context.md)
 *   --exclude <names>  Comma-separated extra folder/file names to exclude
 *   --help             Show help documentation
 */

const fs = require('fs');
const path = require('path');

// Default ignore lists for directories
const DEFAULT_IGNORE_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '.github',
  '.sixth',
  '.idea',
  '.vscode',
  'dist',
  'build',
  'out',
  'coverage',
  '.serverless',
  '.cache'
]);

// Default ignore lists for files
const DEFAULT_IGNORE_FILES = new Set([
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'bun.lockb',
  '.DS_Store',
  'Thumbs.db',
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  '.env.test',
  '.env.local.example'
]);

// Binary/non-text file extensions to completely skip
const BINARY_EXTENSIONS = new Set([
  // Images
  '.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.tiff', '.bmp',
  // Audio/Video
  '.mp4', '.mkv', '.avi', '.mov', '.mp3', '.wav', '.flac', '.ogg',
  // Fonts
  '.woff', '.woff2', '.ttf', '.eot', '.otf',
  // Documents (which are binary)
  '.pdf', '.epub', '.zip', '.tar', '.gz', '.rar', '.7z',
  // Executables/System
  '.exe', '.dll', '.so', '.dylib', '.class', '.pyc', '.db'
]);

// Map extensions to markdown syntax highlighting languages
const EXTENSION_TO_LANG = {
  '.js': 'javascript',
  '.jsx': 'javascript',
  '.mjs': 'javascript',
  '.cjs': 'javascript',
  '.ts': 'typescript',
  '.tsx': 'typescript',
  '.json': 'json',
  '.css': 'css',
  '.scss': 'scss',
  '.sass': 'sass',
  '.html': 'html',
  '.md': 'markdown',
  '.py': 'python',
  '.sh': 'bash',
  '.bash': 'bash',
  '.zsh': 'bash',
  '.ps1': 'powershell',
  '.yml': 'yaml',
  '.yaml': 'yaml',
  '.xml': 'xml',
  '.toml': 'toml',
  '.ini': 'ini',
  '.sql': 'sql',
  '.graphql': 'graphql',
  '.gql': 'graphql',
  '.go': 'go',
  '.rs': 'rust',
  '.cpp': 'cpp',
  '.c': 'c',
  '.h': 'cpp',
  '.java': 'java',
  '.kt': 'kotlin',
  '.swift': 'swift',
  '.rb': 'ruby',
  '.php': 'php'
};

const FILE_NAME_TO_LANG = {
  '.eslintrc': 'json',
  '.eslintrc.json': 'json',
  '.prettierrc': 'json',
  'dockerfile': 'dockerfile',
  'makefile': 'makefile',
  '.gitignore': 'gitignore',
  '.prettierignore': 'gitignore'
};

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB safe limit for text files

function printHelp() {
  console.log(`
Codebase Context Generator
==========================
Generates a comprehensive Markdown document containing the file tree structure
and full text contents of all files in your codebase, filtered by typical excludes.

Usage:
  node generate-context.js [options]

Options:
  --dir <path>       Target directory to scan (default: '.')
  --out <path>       Output Markdown file path (default: 'full_context.md')
  --exclude <names>  Comma-separated extra folder or file names to exclude
                     (e.g., --exclude "temp,logs,debug.txt")
  -h, --help         Show this help information

Features:
  - Generates a neat visual text-based folder structure tree at the top of the doc.
  - Automatically ignores heavy, compiled, or environment folders (node_modules, .next, .git, etc.).
  - Skips binary files (images, audio, videos, zips, PDFs, fonts).
  - Automatically identifies file extensions and applies correct syntax highlighting.
  - Recursion-safe and cross-platform (runs smoothly on Windows, Mac, and Linux).
`);
}

// Parse Command Line Arguments
const args = process.argv.slice(2);
let targetDir = '.';
let outputFile = 'full_context.md';
const extraExcludes = [];

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--dir' && args[i + 1]) {
    targetDir = args[i + 1];
    i++;
  } else if (args[i] === '--out' && args[i + 1]) {
    outputFile = args[i + 1];
    i++;
  } else if (args[i] === '--exclude' && args[i + 1]) {
    extraExcludes.push(...args[i + 1].split(',').map(s => s.trim()));
    i++;
  } else if (args[i] === '--help' || args[i] === '-h') {
    printHelp();
    process.exit(0);
  }
}

// Resolve absolute paths
const absTargetDir = path.resolve(targetDir);
const absOutputFile = path.resolve(outputFile);
const outputFilename = path.basename(absOutputFile);

// Construct final ignore lists
const ignoreDirs = new Set([...DEFAULT_IGNORE_DIRS, ...extraExcludes]);
const ignoreFiles = new Set([...DEFAULT_IGNORE_FILES, outputFilename, 'generate-context.js', ...extraExcludes]);

// Check if target directory exists
if (!fs.existsSync(absTargetDir)) {
  console.error(`❌ Error: Target directory does not exist: ${absTargetDir}`);
  process.exit(1);
}

console.log(`🔍 Scanning directory: ${absTargetDir}`);
console.log(`📝 Output file will be: ${absOutputFile}`);
console.log(`🚫 Excluded folders: ${Array.from(ignoreDirs).join(', ')}`);
console.log(`🚫 Excluded files: ${Array.from(ignoreFiles).join(', ')}\n`);

// Helper to check if a file or directory is ignored
function shouldIgnore(item, fullPath, isDirectory) {
  if (ignoreFiles.has(item)) return true;
  if (fullPath === absOutputFile) return true;
  
  if (isDirectory) {
    return ignoreDirs.has(item);
  } else {
    // Check binary extension
    const ext = path.extname(item).toLowerCase();
    if (BINARY_EXTENSIONS.has(ext)) return true;
    
    // Check if it's a minified file
    if (item.endsWith('.min.js') || item.endsWith('.min.css')) return true;
  }
  return false;
}

// 1. Recursive function to generate the text tree
function generateTree(currentDir, prefix = '') {
  let treeStr = '';
  let items = [];
  
  try {
    items = fs.readdirSync(currentDir);
  } catch (err) {
    console.warn(`⚠️ Warning: Could not read directory ${currentDir}: ${err.message}`);
    return '';
  }

  // Filter out ignored items
  const filteredItems = items.filter(item => {
    const fullPath = path.join(currentDir, item);
    let isDir = false;
    try {
      isDir = fs.statSync(fullPath).isDirectory();
    } catch (e) {
      return false; // Skip if we can't access it
    }
    return !shouldIgnore(item, fullPath, isDir);
  });

  // Sort: directories first, then files alphabetically
  filteredItems.sort((a, b) => {
    const aPath = path.join(currentDir, a);
    const bPath = path.join(currentDir, b);
    let aIsDir = false;
    let bIsDir = false;
    
    try {
      aIsDir = fs.statSync(aPath).isDirectory();
      bIsDir = fs.statSync(bPath).isDirectory();
    } catch (e) {}

    if (aIsDir && !bIsDir) return -1;
    if (!aIsDir && bIsDir) return 1;
    return a.localeCompare(b);
  });

  filteredItems.forEach((item, index) => {
    const isLast = index === filteredItems.length - 1;
    const fullPath = path.join(currentDir, item);
    let isDir = false;
    
    try {
      isDir = fs.statSync(fullPath).isDirectory();
    } catch (e) {}

    const connector = isLast ? '└── ' : '├── ';
    const displayName = isDir ? `${item}/` : item;
    
    treeStr += `${prefix}${connector}${displayName}\n`;
    
    if (isDir) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      treeStr += generateTree(fullPath, newPrefix);
    }
  });

  return treeStr;
}

// 2. Recursive function to write file content to the Markdown stream
function writeFilesContent(currentDir, writeStream) {
  let items = [];
  
  try {
    items = fs.readdirSync(currentDir);
  } catch (err) {
    console.warn(`⚠️ Warning: Could not read directory ${currentDir}: ${err.message}`);
    return;
  }

  // Sort items: directories first, then files alphabetically
  items.sort((a, b) => {
    const aPath = path.join(currentDir, a);
    const bPath = path.join(currentDir, b);
    let aIsDir = false;
    let bIsDir = false;
    
    try {
      aIsDir = fs.statSync(aPath).isDirectory();
      bIsDir = fs.statSync(bPath).isDirectory();
    } catch (e) {}

    if (aIsDir && !bIsDir) return -1;
    if (!aIsDir && bIsDir) return 1;
    return a.localeCompare(b);
  });

  for (const item of items) {
    const fullPath = path.join(currentDir, item);
    let isDir = false;
    
    try {
      isDir = fs.statSync(fullPath).isDirectory();
    } catch (e) {
      continue;
    }

    if (shouldIgnore(item, fullPath, isDir)) continue;

    if (isDir) {
      writeFilesContent(fullPath, writeStream);
    } else {
      const relativePath = path.relative(absTargetDir, fullPath).replace(/\\/g, '/');
      const ext = path.extname(item).toLowerCase();
      
      try {
        const stats = fs.statSync(fullPath);
        
        console.log(`   ➕  Processing: ${relativePath}`);
        
        // Skip over-sized files for LLM context safety
        if (stats.size > MAX_FILE_SIZE) {
          console.warn(`   ⚠️  Warning: Skipped ${relativePath} (size ${ (stats.size / 1024 / 1024).toFixed(2) }MB exceeds 1MB limit)`);
          writeStream.write(`\n---\n\n## File: ${relativePath}\n\n`);
          writeStream.write(`> ⚠️ **File skipped**: Size is ${(stats.size / 1024 / 1024).toFixed(2)}MB, which exceeds the 1MB safety threshold.\n`);
          continue;
        }

        // Detect correct syntax highlighting language
        let lang = EXTENSION_TO_LANG[ext] || '';
        if (!lang) {
          lang = FILE_NAME_TO_LANG[item.toLowerCase()] || '';
        }

        // Use quadruple backticks if the file is markdown itself, to avoid breaking boundaries
        const fence = (lang === 'markdown') ? '````' : '```';
        
        const content = fs.readFileSync(fullPath, 'utf8');
        
        writeStream.write(`\n---\n\n## File: ${relativePath}\n\n`);
        writeStream.write(`${fence}${lang}\n`);
        writeStream.write(content);
        
        if (!content.endsWith('\n')) {
          writeStream.write('\n');
        }
        writeStream.write(`${fence}\n`);
        
      } catch (err) {
        console.error(`   ❌  Error reading file ${relativePath}: ${err.message}`);
      }
    }
  }
}

// 3. Execution
console.log('🌳 Generating visual file tree...');
const relativeTargetDirName = path.basename(absTargetDir) || 'root';
const treeHeader = `${relativeTargetDirName}/\n`;
const treeStructure = generateTree(absTargetDir, '');

console.log('📝 Creating full context markdown document...');
const writeStream = fs.createWriteStream(absOutputFile, { encoding: 'utf8' });

writeStream.on('error', (err) => {
  console.error(`❌ Error writing to output file: ${err.message}`);
  process.exit(1);
});

// Write Markdown Header
writeStream.write(`# Codebase Context - ${relativeTargetDirName}\n\n`);
writeStream.write(`This document contains a comprehensive context of the \`${relativeTargetDirName}\` codebase, including the visual repository tree and contents of all codebase text files. Generated on: ${new Date().toISOString()}.\n\n`);

writeStream.write(`## Repository Directory Structure\n\n`);
writeStream.write('```\n');
writeStream.write(treeHeader);
writeStream.write(treeStructure);
writeStream.write('```\n\n');

writeStream.write(`## File Contents\n`);

// Crawl files and stream them to the markdown output
writeFilesContent(absTargetDir, writeStream);

writeStream.end();

writeStream.on('finish', () => {
  console.log(`\n🎉 Success! Codebase context generated successfully.`);
  console.log(`📂 Output file: ${absOutputFile}`);
});
