Each Agent will have two metrics for the concept deliverable. One will be using data generated entirely within the agent and one will require data from other agents. 

# FIN – Finance Automation

### 1. **Total ROI per Campaign** (Self-Generated)

`Total Revenue from Campaign / Total Spend on Campaign`

**Description:**  
This measures how much revenue a campaign generated relative to its cost. FIN calculates both inputs internally using data from CRM and cost platforms.


### 2. **Customer Acquisition Cost (CAC)** (Dependent)  
`Total Spend / Number of New Customers`

**Description:**  
CAC shows how much it costs to acquire one customer. While FIN computes the number, it depends on lead quality and volume from IMA, delivery costs from MAC, and timing/content impact from PAT and Chip.

# MIT – Market Intelligence

### 1. **Signal Ingestion Volume** (Self-Generated)
`Count of raw, unique external signals ingested per period`

**Description:**  
This measures MIT’s core data pipeline — how much market intelligence it’s bringing in. This includes data like firmographic updates, tech installs, trending keywords, job changes, and more. It reflects MIT's operational capacity.


### 2. **Lift from MIT-Informed Campaigns** (Dependent)
**Formula:**  
`(Performance of MIT-backed campaigns - Baseline performance) / Baseline performance`

**Description:**  
This shows whether campaigns that use MIT's signals actually outperform others. Requires execution by PAT, MAC, and Chip — and tracking by FIN — to compare reply/conversion rates or ROI uplift.

# Chad – Developer Catalyst

### 1. **Workflow Deployment Count** (Self-Generated)  
`Number of new or updated internal workflows deployed`

**Description:**  
Tracks how often Chad is used to build or modify internal systems, UIs, or logic. Reflects its utility in enabling customization without requiring a dev team.

---

### 2. **Time Saved via Automation** (Dependent)  
**Formula:**  
`Estimated hours saved based on usage of Chad-built workflows by reps or agents`

**Description:**  
Measures downstream impact of Chad’s work. Requires feedback or data from other agents or users who experience reduced manual steps or increased efficiency.
