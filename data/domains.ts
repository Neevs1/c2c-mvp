// ─── Domain Data with Sections ──────────────────────────────────────────────────

export interface MCQOption {
    text: string;
    isCorrect: boolean;
}

export interface MCQQuestion {
    id: string;
    question: string;
    options: MCQOption[];
    explanation: string;
}

export interface InterviewQuestion {
    id: string;
    question: string;
    answer: string;
}

export interface CodingChallenge {
    id: string;
    title: string;
    difficulty: "Easy" | "Medium" | "Hard";
    description: string;
    answer: string;
}

export interface RevisionConcept {
    id: string;
    title: string;
    summary: string;
}

export interface DomainSection {
    type: "practice" | "interview" | "coding" | "revision";
    label: string;
    items: MCQQuestion[] | InterviewQuestion[] | CodingChallenge[] | RevisionConcept[];
}

export interface Domain {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    bgGlow: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
    btnBg: string;
    difficulty: string;
    diffBadge: string;
    progress: number;
    progressBar: string;
    estimatedTime: string;
    sections: DomainSection[];
}

export const domains: Domain[] = [
    {
        id: "java-development",
        name: "Java Development",
        description: "Master enterprise Java, Spring Boot, and JVM internals for production systems.",
        icon: "Coffee",
        color: "orange",
        bgGlow: "bg-orange-500/20",
        borderColor: "border-orange-500/20",
        iconBg: "bg-orange-500/10",
        iconColor: "text-orange-400",
        btnBg: "bg-orange-500/10 hover:bg-orange-500/20 text-orange-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 35,
        progressBar: "bg-orange-500",
        estimatedTime: "12h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "java-p1",
                        question: "Which of the following is not a feature of Java?",
                        options: [
                            { text: "Object-Oriented", isCorrect: false },
                            { text: "Platform Independent", isCorrect: false },
                            { text: "Pointer Support", isCorrect: true },
                            { text: "Multithreaded", isCorrect: false },
                        ],
                        explanation: "Java does not support pointers directly. It uses references internally but hides pointer arithmetic from developers for security and simplicity.",
                    },
                    {
                        id: "java-p2",
                        question: "What is the default value of a boolean variable in Java?",
                        options: [
                            { text: "true", isCorrect: false },
                            { text: "false", isCorrect: true },
                            { text: "null", isCorrect: false },
                            { text: "0", isCorrect: false },
                        ],
                        explanation: "In Java, the default value of a boolean primitive is false. For Boolean wrapper objects, the default is null.",
                    },
                    {
                        id: "java-p3",
                        question: "Which keyword is used to prevent a class from being inherited?",
                        options: [
                            { text: "static", isCorrect: false },
                            { text: "abstract", isCorrect: false },
                            { text: "final", isCorrect: true },
                            { text: "sealed", isCorrect: false },
                        ],
                        explanation: "The 'final' keyword prevents a class from being subclassed. A final class cannot be extended by any other class.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "java-i1",
                        question: "Explain the difference between JDK, JRE, and JVM.",
                        answer: "JVM (Java Virtual Machine) is the runtime engine that executes Java bytecode. JRE (Java Runtime Environment) includes JVM plus core libraries needed to run Java apps. JDK (Java Development Kit) includes JRE plus development tools like javac compiler, debugger, and documentation generators.",
                    },
                    {
                        id: "java-i2",
                        question: "What is the difference between HashMap and ConcurrentHashMap?",
                        answer: "HashMap is not thread-safe and allows one null key. ConcurrentHashMap is thread-safe, uses segment-level locking (bucket-level in Java 8+), doesn't allow null keys/values, and provides better concurrent performance than synchronizing a regular HashMap.",
                    },
                    {
                        id: "java-i3",
                        question: "Explain Spring Boot auto-configuration.",
                        answer: "Spring Boot auto-configuration automatically configures beans based on classpath dependencies, property settings, and existing beans. It uses @Conditional annotations to decide which configurations to apply. For example, if H2 is on the classpath, it auto-configures an in-memory database.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "java-c1",
                        title: "Implement a Thread-Safe Singleton",
                        difficulty: "Medium",
                        description: "Create a thread-safe Singleton class using the double-checked locking pattern.",
                        answer: "Use a private static volatile instance variable, private constructor, and a public static getInstance() method with synchronized block using double-checked locking to ensure thread safety with minimal performance overhead.",
                    },
                    {
                        id: "java-c2",
                        title: "Custom ArrayList Implementation",
                        difficulty: "Hard",
                        description: "Implement a generic dynamic array that supports add, remove, get, and resize operations.",
                        answer: "Create a class with a generic array, size tracker, and initial capacity. Implement add() with automatic resizing (double capacity when full), remove() with element shifting, and get() with bounds checking.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "java-r1",
                        title: "Java Memory Model",
                        summary: "Java memory is divided into Stack (method frames, local variables) and Heap (objects, instance variables). The Garbage Collector manages heap memory automatically. Young Generation uses minor GC, Old Generation uses major GC.",
                    },
                    {
                        id: "java-r2",
                        title: "SOLID Principles",
                        summary: "S: Single Responsibility, O: Open/Closed, L: Liskov Substitution, I: Interface Segregation, D: Dependency Inversion. These principles guide maintainable OOP design.",
                    },
                    {
                        id: "java-r3",
                        title: "Spring Bean Lifecycle",
                        summary: "Instantiation → Populate Properties → BeanNameAware → BeanFactoryAware → Pre-initialization (BeanPostProcessor) → InitializingBean → Custom init → Post-initialization → Ready → DisposableBean → Custom destroy.",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
    {
        id: "devops",
        name: "DevOps",
        description: "CI/CD pipelines, containerization, orchestration, and infrastructure as code.",
        icon: "GitBranch",
        color: "green",
        bgGlow: "bg-green-500/20",
        borderColor: "border-green-500/20",
        iconBg: "bg-green-500/10",
        iconColor: "text-green-400",
        btnBg: "bg-green-500/10 hover:bg-green-500/20 text-green-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 20,
        progressBar: "bg-green-500",
        estimatedTime: "15h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "devops-p1",
                        question: "What is the primary purpose of a CI/CD pipeline?",
                        options: [
                            { text: "To write code faster", isCorrect: false },
                            { text: "To automate build, test, and deployment", isCorrect: true },
                            { text: "To replace version control", isCorrect: false },
                            { text: "To manage databases", isCorrect: false },
                        ],
                        explanation: "CI/CD pipelines automate the process of building, testing, and deploying code changes, enabling faster and more reliable software delivery.",
                    },
                    {
                        id: "devops-p2",
                        question: "Which of these is a container orchestration tool?",
                        options: [
                            { text: "Docker", isCorrect: false },
                            { text: "Kubernetes", isCorrect: true },
                            { text: "Ansible", isCorrect: false },
                            { text: "Jenkins", isCorrect: false },
                        ],
                        explanation: "Kubernetes is a container orchestration platform that automates deployment, scaling, and management of containerized applications. Docker is a containerization tool, not an orchestrator.",
                    },
                    {
                        id: "devops-p3",
                        question: "What is the difference between Docker volumes and bind mounts?",
                        options: [
                            { text: "There is no difference", isCorrect: false },
                            { text: "Volumes are managed by Docker; bind mounts map host paths directly", isCorrect: true },
                            { text: "Bind mounts are faster than volumes", isCorrect: false },
                            { text: "Volumes only work on Linux", isCorrect: false },
                        ],
                        explanation: "Docker volumes are managed by the Docker daemon and stored in Docker's storage directory. Bind mounts map a specific host file or directory into the container. Volumes are preferred for production because they are portable and Docker manages their lifecycle.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "devops-i1",
                        question: "Explain the difference between Docker and Kubernetes.",
                        answer: "Docker is a containerization platform for building and running containers. Kubernetes is an orchestration platform that manages multiple containers across a cluster, handling scaling, networking, load balancing, and self-healing of containerized applications.",
                    },
                    {
                        id: "devops-i2",
                        question: "What is Infrastructure as Code (IaC)?",
                        answer: "IaC is the practice of managing infrastructure using code and version control instead of manual processes. Tools like Terraform, CloudFormation, and Pulumi let you define infrastructure declaratively, enabling reproducible, auditable, and automated infrastructure provisioning.",
                    },
                    {
                        id: "devops-i3",
                        question: "Explain Kubernetes pod networking and how pods communicate.",
                        answer: "In Kubernetes, every pod gets its own IP address. Containers within the same pod share the network namespace and communicate via localhost. Pods on the same node communicate via a virtual bridge (cbr0). Across nodes, a CNI plugin (Calico, Flannel, Weave) creates an overlay network ensuring pod-to-pod connectivity. Services provide stable DNS names and load balancing across pod replicas.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "devops-c1",
                        title: "Write a Multi-Stage Dockerfile",
                        difficulty: "Medium",
                        description: "Create a multi-stage Dockerfile for a Node.js application that separates build and runtime stages for optimal image size.",
                        answer: "Stage 1 (builder): Use node:18-alpine, copy package.json, run npm install, copy source, run npm build. Stage 2 (runtime): Use node:18-alpine, copy only built artifacts and production node_modules from builder stage, expose port, set CMD.",
                    },
                    {
                        id: "devops-c2",
                        title: "Write a GitHub Actions CI Pipeline",
                        difficulty: "Medium",
                        description: "Create a GitHub Actions YAML workflow that runs on push to main: checks out code, installs dependencies, runs linting, executes unit tests, builds a Docker image, and pushes it to a container registry.",
                        answer: "Define a workflow with 'on: push: branches: [main]'. Create a job with steps: actions/checkout, setup-node, npm ci, npm run lint, npm test, docker/login-action for registry auth, docker/build-push-action to build and push the image with a SHA-tagged version.",
                    },
                    {
                        id: "devops-c3",
                        title: "Write a Kubernetes Deployment YAML",
                        difficulty: "Hard",
                        description: "Create a Kubernetes Deployment manifest for a web application with 3 replicas, resource limits, health checks, and a corresponding Service for load balancing.",
                        answer: "Define a Deployment with metadata, spec.replicas: 3, container spec with image, ports, resources (requests and limits for CPU/memory), livenessProbe and readinessProbe with httpGet. Add a separate Service of type ClusterIP or LoadBalancer with selector matching the deployment labels and targetPort mapping.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "devops-r1",
                        title: "CI/CD Pipeline Stages",
                        summary: "Source → Build → Unit Tests → Integration Tests → Security Scan → Staging Deploy → Acceptance Tests → Production Deploy. Each stage acts as a quality gate.",
                    },
                    {
                        id: "devops-r2",
                        title: "Docker Key Concepts",
                        summary: "Image: Read-only template. Container: Running instance of image. Dockerfile: Build instructions. Volume: Persistent storage. Network: Container communication. Registry: Image storage (Docker Hub, ECR).",
                    },
                    {
                        id: "devops-r3",
                        title: "Kubernetes Core Components",
                        summary: "Control Plane: API Server (gateway), etcd (state store), Scheduler (pod placement), Controller Manager (desired state). Node: kubelet (pod lifecycle), kube-proxy (networking), Container Runtime (Docker/containerd). Workloads: Pod, Deployment, StatefulSet, DaemonSet, Job, CronJob.",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
    {
        id: "ai-workflows",
        name: "AI Workflows",
        description: "RAG architectures, prompt engineering, LLM integration, and AI system design.",
        icon: "Brain",
        color: "purple",
        bgGlow: "bg-purple-500/20",
        borderColor: "border-purple-500/20",
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        btnBg: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 15,
        progressBar: "bg-purple-500",
        estimatedTime: "18h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "ai-p1",
                        question: "What does RAG stand for in the context of LLMs?",
                        options: [
                            { text: "Recursive Algorithm Generation", isCorrect: false },
                            { text: "Retrieval Augmented Generation", isCorrect: true },
                            { text: "Random Access Gateway", isCorrect: false },
                            { text: "Rapid AI Grounding", isCorrect: false },
                        ],
                        explanation: "RAG (Retrieval Augmented Generation) combines a retrieval system with a generative model. It retrieves relevant documents from a knowledge base and uses them as context for the LLM to generate more accurate, grounded responses.",
                    },
                    {
                        id: "ai-p2",
                        question: "Which technique reduces hallucinations in LLM outputs?",
                        options: [
                            { text: "Increasing temperature", isCorrect: false },
                            { text: "Removing system prompts", isCorrect: false },
                            { text: "Grounding with retrieved context", isCorrect: true },
                            { text: "Using larger batch sizes", isCorrect: false },
                        ],
                        explanation: "Grounding LLM outputs with retrieved context (RAG) significantly reduces hallucinations by providing factual reference material for the model to base its responses on.",
                    },
                    {
                        id: "ai-p3",
                        question: "What is 'prompt chaining' in AI workflows?",
                        options: [
                            { text: "Sending the same prompt multiple times", isCorrect: false },
                            { text: "Breaking a complex task into sequential LLM calls where each output feeds the next", isCorrect: true },
                            { text: "Using multiple LLM providers simultaneously", isCorrect: false },
                            { text: "Caching prompt responses for reuse", isCorrect: false },
                        ],
                        explanation: "Prompt chaining decomposes a complex task into a series of smaller, focused LLM calls. The output of one step becomes the input or context for the next, improving reliability, debuggability, and output quality compared to a single monolithic prompt.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "ai-i1",
                        question: "How would you design a production RAG pipeline?",
                        answer: "A production RAG pipeline includes: 1) Document ingestion & chunking with overlap, 2) Embedding generation using models like text-embedding-3-small, 3) Vector store (Pinecone, Weaviate) for similarity search, 4) Query processing with re-ranking, 5) Context window management, 6) LLM generation with citations, 7) Evaluation using metrics like faithfulness and relevancy.",
                    },
                    {
                        id: "ai-i2",
                        question: "What is tool calling in LLM agents, and how does it work?",
                        answer: "Tool calling allows an LLM to invoke external functions (APIs, databases, calculators) during generation. The model receives function schemas (name, parameters, descriptions) in its prompt. When it determines a tool is needed, it outputs a structured function call instead of text. The orchestrator executes the function, returns the result to the model, and the model incorporates the result into its final response. This enables LLMs to perform actions beyond text generation.",
                    },
                    {
                        id: "ai-i3",
                        question: "Compare fine-tuning vs RAG for domain adaptation. When would you choose each?",
                        answer: "Fine-tuning modifies model weights on domain data — best for changing model behavior, tone, or format, and for tasks requiring deep domain reasoning. RAG retrieves external context at inference time — best for knowledge-heavy tasks, frequently changing data, and when you need citations. Choose fine-tuning when you need the model to learn new patterns; choose RAG when you need the model to access specific facts. In practice, combining both (fine-tuned model + RAG) often yields the best results.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "ai-c1",
                        title: "Build a Simple RAG Chain",
                        difficulty: "Hard",
                        description: "Implement a basic RAG pipeline using LangChain that loads documents, creates embeddings, stores them in a vector DB, and answers questions with retrieved context.",
                        answer: "Load documents with DocumentLoader, split with RecursiveCharacterTextSplitter, embed with OpenAIEmbeddings, store in FAISS/Chroma, create RetrievalQA chain with ChatOpenAI, query with similarity search retriever.",
                    },
                    {
                        id: "ai-c2",
                        title: "Implement an LLM Agent with Tool Calling",
                        difficulty: "Hard",
                        description: "Build an agent that can decide when to call external tools (calculator, web search, database lookup) based on user queries, execute the tools, and synthesize results into a coherent response.",
                        answer: "Define tool schemas with name, description, and parameter types. Create an agent loop: send user query + tool definitions to the LLM. Parse the response — if it's a tool call, extract function name and arguments, execute the function, append the result to conversation history, and re-prompt the LLM. If it's a text response, return it. Add max-iteration guards and error handling for tool failures.",
                    },
                    {
                        id: "ai-c3",
                        title: "Build a Prompt Chain for Document Summarization",
                        difficulty: "Medium",
                        description: "Create a multi-step prompt chain that first extracts key entities from a document, then generates a structured summary, and finally produces action items — each step using the previous step's output.",
                        answer: "Step 1: Prompt LLM to extract key entities (people, dates, topics) from the input document and return as JSON. Step 2: Feed entities + original doc into a summarization prompt with a structured template. Step 3: Pass the summary into an action-item extraction prompt. Chain them using output parsing between steps. Add validation at each step to ensure the output format is correct before proceeding.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "ai-r1",
                        title: "Prompt Engineering Techniques",
                        summary: "Zero-shot: No examples. Few-shot: Include examples. Chain-of-Thought: Step-by-step reasoning. Role prompting: Assign persona. Self-consistency: Multiple reasoning paths. Tree-of-Thought: Branching exploration.",
                    },
                    {
                        id: "ai-r2",
                        title: "Embedding Models Comparison",
                        summary: "OpenAI text-embedding-3-small (1536d, fast), text-embedding-3-large (3072d, accurate). Open-source: BGE, E5, GTE. Choose based on latency, cost, and accuracy tradeoffs. Always benchmark on your domain data.",
                    },
                    {
                        id: "ai-r3",
                        title: "RAG Architecture Components",
                        summary: "Ingestion: Document loading → Chunking (512–1024 tokens, 10–20% overlap) → Embedding → Vector store indexing. Retrieval: Query embedding → Similarity search (cosine/dot product) → Re-ranking (cross-encoder) → Context assembly. Generation: System prompt + retrieved chunks + user query → LLM → Response with citations. Evaluation: Faithfulness, Answer Relevancy, Context Precision, Context Recall.",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
    {
        id: "machine-learning",
        name: "Machine Learning",
        description: "Supervised & unsupervised learning, deep learning, and model optimization.",
        icon: "LineChart",
        color: "cyan",
        bgGlow: "bg-cyan-500/20",
        borderColor: "border-cyan-500/20",
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-400",
        btnBg: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 10,
        progressBar: "bg-cyan-500",
        estimatedTime: "20h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "ml-p1",
                        question: "Which algorithm is best suited for classification tasks?",
                        options: [
                            { text: "Linear Regression", isCorrect: false },
                            { text: "Random Forest", isCorrect: true },
                            { text: "K-Means Clustering", isCorrect: false },
                            { text: "PCA", isCorrect: false },
                        ],
                        explanation: "Random Forest is an ensemble classification algorithm that builds multiple decision trees and combines their predictions. Linear Regression is for continuous outputs, K-Means is for clustering, and PCA is for dimensionality reduction.",
                    },
                    {
                        id: "ml-p2",
                        question: "What is the purpose of regularization in machine learning?",
                        options: [
                            { text: "To increase model complexity", isCorrect: false },
                            { text: "To prevent overfitting by penalizing large weights", isCorrect: true },
                            { text: "To speed up training", isCorrect: false },
                            { text: "To normalize input features", isCorrect: false },
                        ],
                        explanation: "Regularization adds a penalty term to the loss function that discourages large model weights. L1 (Lasso) drives weights to zero for feature selection. L2 (Ridge) shrinks weights toward zero. This prevents the model from fitting noise in the training data.",
                    },
                    {
                        id: "ml-p3",
                        question: "What is the purpose of cross-validation?",
                        options: [
                            { text: "To increase the training data size", isCorrect: false },
                            { text: "To tune hyperparameters faster", isCorrect: false },
                            { text: "To get a reliable estimate of model performance on unseen data", isCorrect: true },
                            { text: "To reduce the number of features", isCorrect: false },
                        ],
                        explanation: "Cross-validation (e.g., k-fold) splits data into k subsets, trains on k-1 folds and validates on the remaining fold, rotating through all folds. This provides a more robust performance estimate than a single train/test split and helps detect overfitting.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "ml-i1",
                        question: "Explain the bias-variance tradeoff.",
                        answer: "Bias is error from overly simplistic assumptions (underfitting). Variance is error from sensitivity to training data fluctuations (overfitting). The tradeoff: increasing model complexity reduces bias but increases variance. The goal is to find the sweet spot that minimizes total error (bias² + variance + irreducible error).",
                    },
                    {
                        id: "ml-i2",
                        question: "What is the vanishing gradient problem and how do you address it?",
                        answer: "The vanishing gradient problem occurs in deep neural networks when gradients become exponentially small as they backpropagate through many layers, causing early layers to learn extremely slowly. Solutions include: using ReLU or Leaky ReLU activation functions instead of sigmoid/tanh, batch normalization to stabilize layer inputs, residual connections (skip connections) as in ResNet, proper weight initialization (He or Xavier), and gradient clipping.",
                    },
                    {
                        id: "ml-i3",
                        question: "Explain transfer learning and when you would use it.",
                        answer: "Transfer learning reuses a model pre-trained on a large dataset (e.g., ImageNet, BERT on text corpora) and adapts it to a new, related task. You freeze early layers (which learn general features) and fine-tune later layers on your specific data. Use it when: you have limited labeled data, your task is related to the pre-trained domain, or you need faster training. Common examples: fine-tuning ResNet for medical imaging, fine-tuning BERT for sentiment analysis.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "ml-c1",
                        title: "Implement Gradient Descent",
                        difficulty: "Medium",
                        description: "Write a gradient descent optimizer from scratch for linear regression with configurable learning rate and iterations.",
                        answer: "Initialize weights to zeros. For each iteration: compute predictions (X·w), calculate error (predictions - y), compute gradient (X^T·error / n), update weights (w = w - lr * gradient). Track and return cost history.",
                    },
                    {
                        id: "ml-c2",
                        title: "Implement K-Nearest Neighbors from Scratch",
                        difficulty: "Easy",
                        description: "Build a KNN classifier that predicts the class of a new data point by finding the k closest training examples using Euclidean distance and majority voting.",
                        answer: "For each test point: compute Euclidean distance to all training points, sort distances, select the k nearest neighbors, count class labels among the k neighbors, return the majority class. Optimize with a priority queue (heap) to avoid full sorting. Handle ties by selecting the class of the nearest neighbor among tied classes.",
                    },
                    {
                        id: "ml-c3",
                        title: "Build a Simple Neural Network",
                        difficulty: "Hard",
                        description: "Implement a two-layer neural network (input → hidden → output) with forward pass, backpropagation, and training loop using only NumPy.",
                        answer: "Initialize weight matrices W1, W2 with random values and bias vectors b1, b2 with zeros. Forward pass: Z1 = X·W1 + b1, A1 = ReLU(Z1), Z2 = A1·W2 + b2, A2 = softmax(Z2). Compute cross-entropy loss. Backward pass: compute dZ2, dW2, db2, then dA1, dZ1, dW1, db1 using chain rule. Update all parameters with learning rate. Repeat for N epochs.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "ml-r1",
                        title: "ML Model Evaluation Metrics",
                        summary: "Classification: Accuracy, Precision, Recall, F1-Score, AUC-ROC. Regression: MSE, RMSE, MAE, R². Always use cross-validation. Choose metrics based on business context (e.g., Recall for medical diagnosis).",
                    },
                    {
                        id: "ml-r2",
                        title: "Neural Network Fundamentals",
                        summary: "Neuron: weighted sum + bias + activation function. Layers: Input, Hidden, Output. Activations: ReLU (hidden), Sigmoid (binary), Softmax (multi-class). Loss: Cross-entropy (classification), MSE (regression). Optimizer: SGD, Adam, RMSProp. Training: Forward pass → Loss → Backpropagation → Weight update.",
                    },
                    {
                        id: "ml-r3",
                        title: "Feature Engineering Best Practices",
                        summary: "Numerical: Scaling (StandardScaler, MinMaxScaler), log transforms for skewed data, polynomial features. Categorical: One-hot encoding, label encoding, target encoding. Text: TF-IDF, word embeddings. Missing data: Imputation (mean, median, KNN). Feature selection: Correlation analysis, mutual information, recursive feature elimination (RFE).",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
    {
        id: "python-fastapi",
        name: "Python + FastAPI",
        description: "Modern async Python APIs, Pydantic validation, and production deployment.",
        icon: "Zap",
        color: "yellow",
        bgGlow: "bg-yellow-500/20",
        borderColor: "border-yellow-500/20",
        iconBg: "bg-yellow-500/10",
        iconColor: "text-yellow-400",
        btnBg: "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 45,
        progressBar: "bg-yellow-500",
        estimatedTime: "10h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "py-p1",
                        question: "What decorator is used to define a GET endpoint in FastAPI?",
                        options: [
                            { text: "@app.route('/')", isCorrect: false },
                            { text: "@app.get('/')", isCorrect: true },
                            { text: "@get('/')", isCorrect: false },
                            { text: "@router.route('/', methods=['GET'])", isCorrect: false },
                        ],
                        explanation: "FastAPI uses @app.get('/') for GET endpoints. Unlike Flask's @app.route(), FastAPI has explicit decorators for each HTTP method: @app.get(), @app.post(), @app.put(), @app.delete().",
                    },
                    {
                        id: "py-p2",
                        question: "What is Pydantic primarily used for in FastAPI?",
                        options: [
                            { text: "Database ORM queries", isCorrect: false },
                            { text: "HTML template rendering", isCorrect: false },
                            { text: "Data validation and serialization using Python type hints", isCorrect: true },
                            { text: "Authentication and authorization", isCorrect: false },
                        ],
                        explanation: "Pydantic validates incoming data against Python type annotations and automatically serializes/deserializes JSON. In FastAPI, Pydantic models define request bodies, query parameters, and response schemas, providing automatic validation, documentation, and error messages.",
                    },
                    {
                        id: "py-p3",
                        question: "How does dependency injection work in FastAPI?",
                        options: [
                            { text: "Through decorators only", isCorrect: false },
                            { text: "Using the Depends() function in endpoint parameters", isCorrect: true },
                            { text: "By importing modules globally", isCorrect: false },
                            { text: "Through middleware exclusively", isCorrect: false },
                        ],
                        explanation: "FastAPI uses Depends() to inject dependencies into route functions. You define a callable (function or class) and pass it as Depends(my_dependency) in the endpoint signature. FastAPI resolves the dependency tree, caches results per-request, and supports nested dependencies.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "py-i1",
                        question: "How does FastAPI achieve high performance compared to Flask?",
                        answer: "FastAPI is built on Starlette (ASGI) and supports async/await natively, enabling non-blocking I/O. Flask uses WSGI (synchronous). FastAPI also uses Pydantic for fast data validation via Rust-compiled core, auto-generates OpenAPI docs, and leverages Python type hints for both validation and documentation.",
                    },
                    {
                        id: "py-i2",
                        question: "Explain how middleware works in FastAPI and give use cases.",
                        answer: "Middleware in FastAPI wraps every request/response cycle. You define a function decorated with @app.middleware('http') that receives the request and a call_next callable. It can modify the request before processing, call await call_next(request) to proceed, then modify the response before returning. Common use cases: CORS handling, request logging and timing, authentication token validation, rate limiting, adding custom response headers, and error standardization.",
                    },
                    {
                        id: "py-i3",
                        question: "How does async/await work in Python, and when should you use async endpoints in FastAPI?",
                        answer: "Python's async/await uses an event loop (asyncio) to handle concurrent I/O without threads. 'async def' declares a coroutine, 'await' suspends it until the awaited operation completes, allowing other coroutines to run. In FastAPI, use async endpoints when doing I/O-bound work (database queries, HTTP calls, file reads) with async-compatible libraries (asyncpg, httpx, aiofiles). Use regular 'def' endpoints for CPU-bound work or when using synchronous libraries — FastAPI automatically runs them in a thread pool.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "py-c1",
                        title: "Build a CRUD API with Pydantic",
                        difficulty: "Easy",
                        description: "Create a FastAPI application with CRUD endpoints for a 'Task' resource using Pydantic models for request/response validation.",
                        answer: "Define Pydantic models (TaskCreate, TaskResponse), use an in-memory dict as storage, implement POST /tasks, GET /tasks, GET /tasks/{id}, PUT /tasks/{id}, DELETE /tasks/{id} with proper status codes and error handling.",
                    },
                    {
                        id: "py-c2",
                        title: "Build an Authentication Middleware",
                        difficulty: "Medium",
                        description: "Create a FastAPI middleware that validates JWT tokens from the Authorization header, extracts user info, and attaches it to the request state. Include token expiry checks and role-based access control.",
                        answer: "Create a middleware function that extracts the Bearer token from the Authorization header, decodes it using PyJWT with the secret key, verifies expiration and issuer claims, extracts user_id and roles, attaches them to request.state, and raises HTTPException(401) for invalid/missing tokens. Add a dependency function get_current_user() that reads from request.state. For RBAC, create a require_role('admin') dependency that checks user roles.",
                    },
                    {
                        id: "py-c3",
                        title: "Implement a Rate Limiter Dependency",
                        difficulty: "Medium",
                        description: "Build a reusable FastAPI dependency that rate-limits API requests per client IP using a sliding window algorithm with in-memory storage.",
                        answer: "Create a RateLimiter class that accepts max_requests and window_seconds. Store request timestamps per client IP in a dict of deques. On each call, remove timestamps outside the window, check if count exceeds limit, add current timestamp, and raise HTTPException(429) if rate exceeded. Use as Depends(RateLimiter(max_requests=100, window_seconds=60)) in endpoint signatures.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "py-r1",
                        title: "FastAPI Key Features",
                        summary: "Async support (ASGI), automatic OpenAPI/Swagger docs, Pydantic validation, dependency injection, middleware support, WebSocket support, background tasks, OAuth2/JWT built-in, and automatic request/response serialization.",
                    },
                    {
                        id: "py-r2",
                        title: "Python Async Fundamentals",
                        summary: "Event loop: Manages coroutine scheduling. async def: Declares a coroutine. await: Suspends until result ready. asyncio.gather(): Run coroutines concurrently. asyncio.create_task(): Schedule coroutine on the loop. Async libraries: httpx (HTTP), asyncpg (PostgreSQL), aiofiles (file I/O), motor (MongoDB). Pitfall: Never call blocking/synchronous code in async functions — use run_in_executor() instead.",
                    },
                    {
                        id: "py-r3",
                        title: "Pydantic V2 Key Features",
                        summary: "Core rewritten in Rust for 5-50x speed boost. model_validate() replaces parse_obj(). model_dump() replaces dict(). Field(alias=...) for JSON key mapping. @field_validator for custom validation. Strict mode: no type coercion. Computed fields with @computed_field. Discriminated unions for polymorphic models. Settings management with BaseSettings for env variables.",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
    {
        id: "cloud-computing",
        name: "Cloud Computing",
        description: "AWS, Azure, GCP services, serverless architecture, and cloud-native patterns.",
        icon: "Cloud",
        color: "sky",
        bgGlow: "bg-sky-500/20",
        borderColor: "border-sky-500/20",
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-400",
        btnBg: "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 25,
        progressBar: "bg-sky-500",
        estimatedTime: "14h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "cloud-p1",
                        question: "Which AWS service is used for serverless compute?",
                        options: [
                            { text: "EC2", isCorrect: false },
                            { text: "Lambda", isCorrect: true },
                            { text: "ECS", isCorrect: false },
                            { text: "Lightsail", isCorrect: false },
                        ],
                        explanation: "AWS Lambda is a serverless compute service that runs code in response to events without provisioning servers. EC2 provides virtual machines, ECS is for containers, and Lightsail is a simplified VM service.",
                    },
                    {
                        id: "cloud-p2",
                        question: "What is a VPC in cloud computing?",
                        options: [
                            { text: "A type of virtual machine", isCorrect: false },
                            { text: "A logically isolated virtual network you define in the cloud", isCorrect: true },
                            { text: "A container orchestration service", isCorrect: false },
                            { text: "A database replication strategy", isCorrect: false },
                        ],
                        explanation: "A VPC (Virtual Private Cloud) is a logically isolated section of the cloud where you can launch resources in a virtual network you define. You control IP ranges, subnets, route tables, security groups, and network gateways. It provides network-level isolation and security for your cloud resources.",
                    },
                    {
                        id: "cloud-p3",
                        question: "What is the difference between horizontal and vertical scaling?",
                        options: [
                            { text: "They are the same concept", isCorrect: false },
                            { text: "Horizontal adds more machines; vertical adds more power to existing machines", isCorrect: true },
                            { text: "Vertical is always better than horizontal", isCorrect: false },
                            { text: "Horizontal scaling only works with databases", isCorrect: false },
                        ],
                        explanation: "Vertical scaling (scale up) means adding more CPU, RAM, or storage to a single machine. Horizontal scaling (scale out) means adding more machines to distribute the load. Horizontal scaling provides better fault tolerance and theoretically unlimited capacity, while vertical scaling is simpler but has hardware limits.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "cloud-i1",
                        question: "Compare IaaS, PaaS, and SaaS with examples.",
                        answer: "IaaS (Infrastructure as a Service): Raw compute, storage, networking - e.g., AWS EC2, Azure VMs. PaaS (Platform as a Service): Managed platform for deploying apps - e.g., Heroku, Google App Engine. SaaS (Software as a Service): Ready-to-use software - e.g., Gmail, Salesforce. Each layer abstracts more infrastructure management.",
                    },
                    {
                        id: "cloud-i2",
                        question: "How does a cloud load balancer work, and what are the different types?",
                        answer: "A load balancer distributes incoming traffic across multiple backend targets to ensure high availability and performance. Types: Application Load Balancer (ALB) operates at Layer 7 (HTTP/HTTPS), supports path-based and host-based routing, WebSockets, and SSL termination. Network Load Balancer (NLB) operates at Layer 4 (TCP/UDP), handles millions of requests per second with ultra-low latency. Gateway Load Balancer (GWLB) for third-party virtual appliances. Algorithms: Round Robin, Least Connections, IP Hash, Weighted.",
                    },
                    {
                        id: "cloud-i3",
                        question: "Explain the CAP theorem and its implications for distributed cloud systems.",
                        answer: "The CAP theorem states that a distributed system can guarantee at most two of three properties: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition Tolerance (system operates despite network failures). Since network partitions are inevitable in distributed systems, the real choice is between CP (consistent but may reject requests during partitions, e.g., MongoDB, HBase) and AP (available but may return stale data, e.g., Cassandra, DynamoDB). Many modern systems offer tunable consistency levels.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "cloud-c1",
                        title: "Design a Serverless API",
                        difficulty: "Medium",
                        description: "Architect a serverless REST API using API Gateway, Lambda, and DynamoDB with proper IAM roles and error handling.",
                        answer: "API Gateway routes → Lambda functions (one per endpoint or monolithic) → DynamoDB table. Use IAM roles with least privilege, enable CORS, add request validation at API Gateway level, implement error handling with proper HTTP status codes, and add CloudWatch logging.",
                    },
                    {
                        id: "cloud-c2",
                        title: "Design a Highly Available Architecture",
                        difficulty: "Hard",
                        description: "Design a multi-AZ, auto-scaling web application architecture on AWS that handles failover gracefully and maintains 99.99% uptime.",
                        answer: "Use Route 53 for DNS with health checks and failover routing. Place an ALB across multiple AZs. Behind it, deploy an Auto Scaling Group with instances spread across at least 2 AZs. Use RDS Multi-AZ for the database with read replicas. Add ElastiCache (Redis) for session storage and caching. Store static assets on S3 with CloudFront CDN. Implement health checks at every layer. Use CloudWatch alarms and SNS for monitoring and alerting.",
                    },
                    {
                        id: "cloud-c3",
                        title: "Write a Terraform Configuration for VPC Setup",
                        difficulty: "Medium",
                        description: "Write Terraform IaC that provisions a VPC with public and private subnets across 2 availability zones, NAT gateway, internet gateway, and proper route tables.",
                        answer: "Define aws_vpc with CIDR block. Create 2 public and 2 private aws_subnet resources across different AZs. Create aws_internet_gateway and attach to VPC. Create aws_nat_gateway in a public subnet with an Elastic IP. Define aws_route_table for public (route to IGW) and private (route to NAT GW) subnets. Associate route tables with respective subnets. Add security groups with least-privilege rules.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "cloud-r1",
                        title: "AWS Core Services",
                        summary: "Compute: EC2, Lambda, ECS, Fargate. Storage: S3, EBS, EFS. Database: RDS, DynamoDB, ElastiCache. Networking: VPC, Route 53, CloudFront. Security: IAM, KMS, WAF. Messaging: SQS, SNS, EventBridge.",
                    },
                    {
                        id: "cloud-r2",
                        title: "Cloud Security Best Practices",
                        summary: "IAM: Least privilege, MFA, rotate keys, use roles over users. Network: VPC isolation, security groups (stateful), NACLs (stateless), private subnets for databases. Data: Encrypt at rest (KMS) and in transit (TLS). Monitoring: CloudTrail for audit logs, GuardDuty for threat detection, Config for compliance. Secrets: Never hardcode — use Secrets Manager or Parameter Store.",
                    },
                    {
                        id: "cloud-r3",
                        title: "Serverless Architecture Patterns",
                        summary: "API pattern: API Gateway + Lambda + DynamoDB. Event-driven: S3 events → Lambda → processing. Fan-out: SNS → multiple SQS → Lambda workers. Scheduled: EventBridge rules → Lambda. Stream processing: Kinesis/DynamoDB Streams → Lambda. Step Functions for orchestrating complex workflows. Cold start mitigation: Provisioned concurrency, keep functions small, use SnapStart (Java).",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
    {
        id: "data-engineering",
        name: "Data Engineering",
        description: "ETL pipelines, data lakes, streaming platforms, and data warehouse design.",
        icon: "Database",
        color: "emerald",
        bgGlow: "bg-emerald-500/20",
        borderColor: "border-emerald-500/20",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
        btnBg: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400",
        difficulty: "Advanced",
        diffBadge: "bg-red-500/10 text-red-400",
        progress: 5,
        progressBar: "bg-emerald-500",
        estimatedTime: "16h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "de-p1",
                        question: "What is the difference between ETL and ELT?",
                        options: [
                            { text: "They are the same thing", isCorrect: false },
                            { text: "ETL transforms before loading; ELT transforms after loading", isCorrect: true },
                            { text: "ETL is faster than ELT", isCorrect: false },
                            { text: "ELT doesn't involve extraction", isCorrect: false },
                        ],
                        explanation: "ETL (Extract, Transform, Load) transforms data before loading into the target. ELT (Extract, Load, Transform) loads raw data first, then transforms it in the target system, leveraging the target's compute power (e.g., data warehouses like Snowflake).",
                    },
                    {
                        id: "de-p2",
                        question: "What is data partitioning and why is it important?",
                        options: [
                            { text: "Splitting data across different databases for backup", isCorrect: false },
                            { text: "Organizing data into subsets by a key to improve query performance", isCorrect: true },
                            { text: "Encrypting data at rest", isCorrect: false },
                            { text: "Compressing data for storage savings", isCorrect: false },
                        ],
                        explanation: "Data partitioning divides a large dataset into smaller, manageable chunks based on a key (e.g., date, region). It improves query performance by enabling partition pruning (reading only relevant partitions), reduces scan costs, and enables parallel processing. Common strategies: range partitioning (by date), hash partitioning (even distribution), list partitioning (by category).",
                    },
                    {
                        id: "de-p3",
                        question: "Which of these is a columnar storage format commonly used in data lakes?",
                        options: [
                            { text: "CSV", isCorrect: false },
                            { text: "JSON", isCorrect: false },
                            { text: "Parquet", isCorrect: true },
                            { text: "XML", isCorrect: false },
                        ],
                        explanation: "Apache Parquet is a columnar storage format optimized for analytical queries. It provides efficient compression (column-wise), predicate pushdown, and column pruning — reading only the columns needed for a query. It is the standard format for data lake storage in Spark, Hive, Presto, and most modern data tools.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "de-i1",
                        question: "How would you design a real-time data pipeline?",
                        answer: "Use Kafka/Kinesis for event ingestion, Spark Streaming/Flink for real-time processing, write to both a data lake (S3/ADLS) for batch analytics and a fast store (Redis/DynamoDB) for serving. Include schema registry for data contracts, dead letter queues for error handling, and monitoring with metrics and alerts.",
                    },
                    {
                        id: "de-i2",
                        question: "Explain Slowly Changing Dimensions (SCD) and their types.",
                        answer: "SCDs handle dimension records that change over time in a data warehouse. Type 1: Overwrite the old value — simple but loses history. Type 2: Add a new row with version tracking (start_date, end_date, is_current flag) — preserves full history, most common. Type 3: Add a new column for the previous value — limited history (only one prior version). Type 4: Store history in a separate mini-dimension table. Type 6 (hybrid): Combines Type 1 + 2 + 3 with current value, history rows, and previous column.",
                    },
                    {
                        id: "de-i3",
                        question: "What is data lineage and why is it critical in data engineering?",
                        answer: "Data lineage tracks data from its origin through every transformation, join, aggregation, and movement to its final destination. It answers: Where did this data come from? What transformations were applied? Who or what process last modified it? It is critical for: debugging data quality issues (tracing errors upstream), regulatory compliance (GDPR, HIPAA — proving data handling), impact analysis (knowing what breaks if a source changes), and building trust in data for decision-making. Tools: Apache Atlas, OpenLineage, dbt lineage graphs, Marquez.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "de-c1",
                        title: "Build a Data Validation Framework",
                        difficulty: "Medium",
                        description: "Create a Python framework that validates data quality checks (null counts, schema conformity, value ranges) on a DataFrame.",
                        answer: "Define a DataValidator class with configurable rules. Implement check methods for null percentage thresholds, schema validation against expected dtypes, range checks for numeric columns, and uniqueness constraints. Return a validation report with pass/fail status per check.",
                    },
                    {
                        id: "de-c2",
                        title: "Implement a Streaming Data Pipeline with Kafka",
                        difficulty: "Hard",
                        description: "Design and implement a Python-based streaming pipeline that consumes JSON events from a Kafka topic, applies windowed aggregations, and writes results to both a database and a monitoring dashboard.",
                        answer: "Use confluent-kafka or kafka-python for consumer. Deserialize JSON messages with schema validation. Implement a tumbling window aggregator using an in-memory buffer with time-based flushing (e.g., 60-second windows). On window close: compute aggregates (count, sum, avg), batch-insert into PostgreSQL using asyncpg, and push metrics to Prometheus/Grafana. Handle consumer group rebalancing, implement at-least-once delivery with manual offset commits after successful writes, and add a dead letter topic for malformed messages.",
                    },
                    {
                        id: "de-c3",
                        title: "Build an Incremental Data Loading Pipeline",
                        difficulty: "Medium",
                        description: "Implement a Python ETL script that performs incremental loads from a source database to a data warehouse, using watermark tracking to process only new or updated records.",
                        answer: "Store a high-watermark (last processed timestamp or ID) in a metadata table. On each run: read the watermark, query source for records WHERE updated_at > watermark, transform records (type casting, deduplication, null handling), upsert into the target warehouse using MERGE/INSERT ON CONFLICT, update the watermark to the max timestamp of processed records. Wrap in a transaction for atomicity. Add logging for record counts and execution time. Handle schema evolution gracefully.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "de-r1",
                        title: "Data Warehouse vs Data Lake",
                        summary: "Data Warehouse: Structured data, schema-on-write, optimized for BI queries (Snowflake, Redshift). Data Lake: Raw data in any format, schema-on-read, for ML and analytics (S3, ADLS). Data Lakehouse combines both (Delta Lake, Iceberg).",
                    },
                    {
                        id: "de-r2",
                        title: "Apache Kafka Key Concepts",
                        summary: "Topic: Named stream of records. Partition: Ordered, immutable sequence within a topic — unit of parallelism. Offset: Position of a record in a partition. Producer: Publishes records. Consumer: Reads records via consumer groups. Broker: Server storing partitions. Replication: Each partition has leader + followers for fault tolerance. Retention: Time-based or size-based. Schema Registry: Enforces data contracts (Avro, Protobuf).",
                    },
                    {
                        id: "de-r3",
                        title: "Data Quality Dimensions",
                        summary: "Accuracy: Data correctly represents real-world values. Completeness: No missing required fields. Consistency: Same data agrees across systems. Timeliness: Data is current and available when needed. Uniqueness: No unintended duplicates. Validity: Data conforms to defined formats and rules. Tools: Great Expectations, dbt tests, Soda, Monte Carlo for observability.",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
    {
        id: "full-stack-development",
        name: "Full Stack Development",
        description: "React, Next.js, Node.js, databases, and end-to-end application architecture.",
        icon: "Code2",
        color: "pink",
        bgGlow: "bg-pink-500/20",
        borderColor: "border-pink-500/20",
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-400",
        btnBg: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-400",
        difficulty: "Intermediate",
        diffBadge: "bg-yellow-500/10 text-yellow-400",
        progress: 30,
        progressBar: "bg-pink-500",
        estimatedTime: "16h",
        sections: [
            {
                type: "practice",
                label: "Practice Questions",
                items: [
                    {
                        id: "fs-p1",
                        question: "What is the Virtual DOM in React?",
                        options: [
                            { text: "A browser API for fast rendering", isCorrect: false },
                            { text: "A lightweight copy of the real DOM for diffing", isCorrect: true },
                            { text: "A server-side rendering technique", isCorrect: false },
                            { text: "A CSS optimization method", isCorrect: false },
                        ],
                        explanation: "The Virtual DOM is an in-memory representation of the real DOM. React uses it to compute the minimal set of changes needed (diffing/reconciliation) and batch-updates the real DOM efficiently.",
                    },
                    {
                        id: "fs-p2",
                        question: "Which Next.js feature enables server-side rendering?",
                        options: [
                            { text: "getStaticProps", isCorrect: false },
                            { text: "Server Components (default in App Router)", isCorrect: true },
                            { text: "useEffect", isCorrect: false },
                            { text: "client-side fetching", isCorrect: false },
                        ],
                        explanation: "In Next.js App Router, components are Server Components by default, rendering on the server. For Pages Router, getServerSideProps enables SSR. Server Components can directly access databases and APIs without exposing them to the client.",
                    },
                ] as MCQQuestion[],
            },
            {
                type: "interview",
                label: "Interview Questions",
                items: [
                    {
                        id: "fs-i1",
                        question: "Explain the difference between SSR, SSG, and ISR in Next.js.",
                        answer: "SSR (Server-Side Rendering): Page is rendered on each request - good for dynamic content. SSG (Static Site Generation): Pages are built at compile time - fastest, ideal for static content. ISR (Incremental Static Regeneration): Pages are statically generated but revalidated at specified intervals - combines SSG speed with data freshness.",
                    },
                    {
                        id: "fs-i2",
                        question: "How do you handle authentication in a full-stack Next.js app?",
                        answer: "Use NextAuth.js/Auth.js for session management. Store JWT in httpOnly cookies, implement middleware for route protection, use server-side session validation in Server Components, protect API routes with authentication checks, and implement CSRF protection. For OAuth, configure providers (Google, GitHub) through NextAuth.",
                    },
                ] as InterviewQuestion[],
            },
            {
                type: "coding",
                label: "Coding Challenges",
                items: [
                    {
                        id: "fs-c1",
                        title: "Build a Real-time Chat Component",
                        difficulty: "Hard",
                        description: "Create a React chat component with WebSocket connection, message history, typing indicators, and optimistic UI updates.",
                        answer: "Use useEffect for WebSocket connection lifecycle, useReducer for message state management, implement reconnection logic with exponential backoff, show typing indicators via WebSocket events, add optimistic message rendering with confirmation, and handle offline/error states gracefully.",
                    },
                    {
                        id: "fs-c2",
                        title: "Implement a Custom Hook for API Calls",
                        difficulty: "Easy",
                        description: "Create a reusable useApi hook that handles loading, error, data states with automatic retry and caching.",
                        answer: "Create useApi(url, options) that returns {data, error, isLoading, refetch}. Use useReducer for state, AbortController for cleanup, implement retry with exponential backoff, add a simple Map-based cache with TTL, and handle race conditions with request IDs.",
                    },
                ] as CodingChallenge[],
            },
            {
                type: "revision",
                label: "Quick Revision",
                items: [
                    {
                        id: "fs-r1",
                        title: "React Hooks Overview",
                        summary: "useState: Local state. useEffect: Side effects. useContext: Context consumption. useReducer: Complex state. useMemo: Memoized values. useCallback: Memoized functions. useRef: Mutable refs. useTransition: Non-urgent updates.",
                    },
                    {
                        id: "fs-r2",
                        title: "REST API Design Principles",
                        summary: "Use nouns for resources (/users, /posts). HTTP methods for actions (GET, POST, PUT, DELETE). Status codes for responses (200, 201, 400, 404, 500). Pagination with limit/offset. Versioning via URL (/v1/) or headers. HATEOAS for discoverability.",
                    },
                ] as RevisionConcept[],
            },
        ],
    },
];
