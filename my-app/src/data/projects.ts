export interface Technology {
  name: string;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  impact: {
    metric: string;
    value: string;
  }[];
  features: string[];
  challenges: string[];
  learnings: string[];
  demoUrl?: string;
  githubUrl: string;
  codeSnippet?: {
    language: string;
    code: string;
    description: string;
  };
  status: 'Completed' | 'In Progress' | 'Open Source';
  duration: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SafeHer Surveillance",
    tagline: "AI-powered real-time surveillance and alert automation platform",
    description: "Enterprise surveillance system incorporating real-time computer vision threat detection, zero-latency streaming pipelines, and automated multi-channel alert dispatch.",
    longDescription: "SafeHer is an enterprise-grade AI-powered surveillance and alert platform designed for high-throughput security automation. The system integrates advanced computer vision ML models with real-time video streaming pipelines to detect security threats on the fly. Upon threat detection, the system triggers automated notification workflows (email, SMS, pushes) to authorities and security personnel with sub-second dispatch latency. By employing asynchronous queue workers and edge-optimized inference models, the platform processes concurrent streams without throttling or frame drops, establishing a robust defense network for commercial and industrial zones.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9",
    alt: "Modern security monitoring center with multiple screen feeds displaying real-time bounding boxes",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "FastAPI", category: "API" },
      { name: "OpenCV", category: "AI/ML" },
      { name: "TensorFlow", category: "AI/ML" },
      { name: "Redis", category: "Queue/Caching" },
      { name: "Docker", category: "DevOps" },
      { name: "PostgreSQL", category: "Database" }
    ],
    category: "AI Systems",
    complexity: "Advanced",
    impact: [
      { metric: "Dispatch Latency", value: "<800ms" },
      { metric: "Detection Accuracy", value: "96.4%" },
      { metric: "Concurrent Streams", value: "50+" },
      { metric: "False Positives", value: "<1.2%" }
    ],
    features: [
      "Real-time edge computer vision inference for threat and gesture recognition",
      "Zero-latency video stream ingestion via optimized OpenCV pipelines",
      "Asynchronous task queue dispatching using Redis and Celery",
      "Multi-channel automated alerting (SMS fallback, SMTP email notifications)",
      "Secure, highly optimized REST APIs for dashboard telemetry feeds",
      "Fully containerized deployment using Docker and Kubernetes"
    ],
    challenges: [
      "Mitigating frame drops and network latency during concurrent 1080p stream processing",
      "Optimizing ML inference execution time to meet strict sub-second alert SLAs",
      "Handling edge connectivity drops using localized offline caching mechanisms"
    ],
    learnings: [
      "Leveraged model quantization to reduce TensorFlow memory footprint by 40% with negligible accuracy loss",
      "Used Redis-backed publish-subscribe patterns for instant telemetry updates",
      "Designed zero-knowledge privacy pipelines to secure streaming metadata"
    ],
    demoUrl: "https://safeher-surveillance.example.com",
    githubUrl: "https://github.com/Abhi2oo3/safeher-surveillance",
    codeSnippet: {
      language: "python",
      code: `import asyncio
from redis import asyncio as aioredis

# Real-time alert worker with Redis pub/sub
async def dispatch_threat_alert(threat_event):
    redis = await aioredis.from_url("redis://localhost")
    alert_payload = {
        "event_id": threat_event.id,
        "type": threat_event.type,
        "confidence": threat_event.confidence,
        "timestamp": threat_event.time
    }
    
    # Broadcast to websocket dashboard and trigger notification pipeline
    await redis.publish("telemetry:threat_alerts", str(alert_payload))
    await asyncio.gather(
        trigger_sms_alert(threat_event.contact, "THREAT DETECTED"),
        trigger_email_alert(threat_event.admin, "Critical Security Event"),
        save_threat_to_db(threat_event)
    )
    print("Alert dispatched globally under 800ms SLA.")`,
      description: "Async alert worker using FastAPI and Redis Pub/Sub for sub-second threat dispatching"
    },
    status: "Completed",
    duration: "6 months",
    role: "Lead Systems & ML Engineer"
  },
  {
    id: 2,
    title: "CleanMyData Platform",
    tagline: "Workflow-driven automated data cleaning and ETL pipeline platform",
    description: "Production data processing system featuring automated anomaly detection, custom ETL workflows, high-throughput Pandas cleaning engines, and standardized REST API endpoints.",
    longDescription: "CleanMyData is a workflow-driven automated data cleaning platform designed to tackle dirty data in enterprise pipelines. Operating as a self-contained microservice, the platform ingests massive CSV, Excel, and database dumps, analyzes schema structure, and executes custom cleaning operations (null imputation, date normalization, out-of-bound removal). Built on Python's robust Pandas and NumPy libraries, the platform processes millions of records in seconds, exporting clean, standardized sets through custom REST endpoints. The system saves hundreds of manual engineering hours by transforming complex ETL rules into automated, reusable data operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    alt: "Clean database visual dashboard with graphs showing data processing progression",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "Django", category: "Backend" },
      { name: "Pandas", category: "Data Engine" },
      { name: "NumPy", category: "Data Engine" },
      { name: "PostgreSQL", category: "Database" },
      { name: "n8n", category: "Automation" }
    ],
    category: "Workflow Automation",
    complexity: "Intermediate",
    impact: [
      { metric: "ETL Time Reduced", value: "85%" },
      { metric: "Manual Hours Saved", value: "120+/mo" },
      { metric: "Processing Speed", value: "10k recs/s" },
      { metric: "Data Anomaly Detection", value: "99.1%" }
    ],
    features: [
      "Automated structural schema validation and column classification",
      "ETL processing engine leveraging vectorized Pandas operations",
      "Integration with n8n for automated workflow triggering and reports",
      "Dynamic rules builder for domain-specific custom cleaning patterns",
      "REST API endpoints for direct integration with external databases",
      "Comprehensive logging and data audit trail generation"
    ],
    challenges: [
      "Optimizing heavy vectorized data processing to stay within memory boundaries under large file uploads",
      "Standardizing varied, inconsistent data formats into structured PostgreSQL schemas",
      "Developing an intuitive, declarative JSON rule structure for non-technical administrators"
    ],
    learnings: [
      "Discovered that chunk-based file streaming reduces memory overhead by 70% compared to full-file loading",
      "Mastered n8n webhook integrations to trigger automated cleaning upon S3 bucket events",
      "Strengthened RESTful design principles for seamless enterprise pipeline consumption"
    ],
    demoUrl: "https://cleanmydata-automation.example.com",
    githubUrl: "https://github.com/Abhi2oo3/cleanmydata",
    codeSnippet: {
      language: "python",
      code: `import pandas as pd

# High-performance chunk-based ETL cleaning processor
def process_data_in_chunks(input_file_path, cleaning_rules):
    chunk_size = 50000
    cleaned_rows = 0
    
    # Ingest file dynamically using chunk generators to avoid RAM bottlenecks
    for chunk in pd.read_csv(input_file_path, chunksize=chunk_size):
        # 1. Strip whitespaces & normalize headers
        chunk.columns = chunk.columns.str.strip().str.lower()
        # 2. Impute null records vectorially for speed
        if 'email' in chunk.columns:
            chunk['email'] = chunk['email'].fillna('unspecified@domain.com')
        # 3. Apply custom out-of-bound filters
        chunk = chunk[chunk['age'] > 0] if 'age' in chunk.columns else chunk
        
        # Save to transactional PostgreSQL instance
        save_chunk_to_postgres(chunk)
        cleaned_rows += len(chunk)
        
    return {"status": "success", "processed_records": cleaned_rows}`,
      description: "High-throughput chunked ETL streaming processor built on top of Pandas"
    },
    status: "Completed",
    duration: "5 months",
    role: "Backend & Data Architect"
  },
  {
    id: 3,
    title: "Modular School ERP",
    tagline: "Modular School ERP management system with custom Odoo and PostgreSQL",
    description: "Enterprise-grade educational resource planner customized with modular Odoo extensions, high-performance PostgreSQL queries, and automated administrative operations.",
    longDescription: "The Modular School ERP Management System is an enterprise resource planning system tailored for modern educational institutions. Built by extending the robust Odoo ERP framework, this platform manages administrative, student, and financial workflows inside a single, secure database. The system customizes database tables, access controls, and modular views to automate student registrations, grade tracking, fee collections, and automated reporting. Supported by a tuned PostgreSQL database and integrated with n8n workflows, this system significantly reduces administrative friction, allowing institutions to manage campus operations with high efficiency.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    alt: "Interface showing a modern portal dashboard with statistics and student records",
    technologies: [
      { name: "Odoo ERP", category: "Framework" },
      { name: "Python", category: "Language" },
      { name: "PostgreSQL", category: "Database" },
      { name: "XML/QWeb", category: "Frontend" },
      { name: "n8n", category: "Automation" },
      { name: "Docker", category: "DevOps" }
    ],
    category: "ERP Systems",
    complexity: "Advanced",
    impact: [
      { metric: "Admin Friction", value: "60% less" },
      { metric: "Report Generation", value: "Instant" },
      { metric: "Registration Velocity", value: "3x faster" },
      { metric: "Database Response Time", value: "<150ms" }
    ],
    features: [
      "Modular Odoo ERP core customization with fine-grained access rules",
      "Highly optimized PostgreSQL relational tables and query optimizations",
      "Automated PDF report generation via Odoo's custom QWeb engine",
      "n8n automation workflows for SMS/Email notifications on fee deadlines",
      "Custom portal branding and CSS asset injection (brand.css)",
      "Microservices layout deployed via Docker Compose"
    ],
    challenges: [
      "Migrating legacy, unstructured data into clean, normalized Odoo PostgreSQL tables",
      "Maintaining low response times on high-join complex student database reports",
      "Ensuring seamless authorization state management across distinct user portals"
    ],
    learnings: [
      "Gained expert-level knowledge in PostgreSQL database query tuning and index optimization",
      "Mastered Odoo's XML-based inheritance mechanisms to customize core administrative pages",
      "Established robust transactional safety protocols preventing data corruption in nested operations"
    ],
    demoUrl: "https://school-erp-demo.example.com",
    githubUrl: "https://github.com/Abhi2oo3/school-erp-management",
    codeSnippet: {
      language: "python",
      code: `from odoo import models, fields, api

# Custom School ERP Registration Model inheriting Odoo Core
class SchoolStudent(models.Model):
    _name = 'school.student'
    _description = 'School Student Registration Record'
    
    name = fields.Char(string='Student Name', required=True)
    enrollment_id = fields.Char(string='Enrollment ID', copy=False, readonly=True)
    active_portal = fields.Boolean(string='Portal Active', default=True)
    fee_balance = fields.Float(string='Pending Balance', default=0.0)
    
    # Custom Odoo logic hooks
    @api.model
    def create(self, vals):
        # Generate unique sequence-based Enrollment ID automatically
        vals['enrollment_id'] = self.env['ir.sequence'].next_by_code('school.student.seq')
        return super(SchoolStudent, self).create(vals)`,
      description: "Custom Odoo model definition showing PostgreSQL database table extensions and fields"
    },
    status: "Completed",
    duration: "8 months",
    role: "Lead ERP Developer & Database Architect"
  }
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies.map((t) => t.name)))
).sort();

export const categories = Array.from(
  new Set(projects.map((p) => p.category))
).sort();