# TaskBoard 🗂️

A full stack task manager built with **Spring Boot** (backend) and **React** (frontend) as a beginner project to learn REST APIs, JPA, and React hooks.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Spring Boot 3.x, Java 21 |
| Database | H2 (in-memory) |
| ORM | Spring Data JPA + Hibernate |
| Frontend | React (Vite) |
| HTTP Client | Axios |

---

## Project Structure
```
TaskBoard/
├── backend/ (Spring Boot)
│   └── src/main/java/com/example/Task_Board/
│       ├── model/TaskRepository.java
│       ├── Repositories/TaskRepository.java
│       ├── Service/TaskService.java
│       └── Controller/TaskController.java
│
└── frontend/ (React + Vite)
    └── taskboard-ui/src/
        ├── services/taskService.js
        ├── TaskBoard.jsx
        └── TaskBoard.css
```

---

## Getting Started

### Backend
1. Open the `backend/` folder in IntelliJ
2. Run `TaskBoardApplication.java`
3. Server starts at `http://localhost:8080`
4. H2 console → `http://localhost:8080/h2-console`

### Frontend
```bash
cd taskboard-ui
npm install
npm run dev
```
App runs at `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/task/getAllTasks` | Fetch all tasks |
| POST | `/api/task/createTask` | Create a new task |
| DELETE | `/api/task/deleteTask/{id}` | Delete task by ID |

---

## Key Concepts

- `@Entity` + `@Id` + `@GeneratedValue` — maps Java class to DB table
- `JpaRepository<Task, Integer>` — free CRUD methods, no SQL needed
- `@RequiredArgsConstructor` + `private final` — constructor injection (preferred over `@Autowired`)
- `@CrossOrigin` — fixes CORS when React (5173) calls Spring Boot (8080)
- `@RequestBody` — deserializes incoming JSON into a Java object
- `@PathVariable` — extracts value from URL path (`/deleteTask/3`)
- `useState` — React hook for reactive state
- `useEffect(() => {}, [])` — runs once on component mount
- Axios `.then()` — handles async API responses

---

## Request Flow
```
HTTP Request
    ↓
@RestController  →  receives request
    ↓
@Service         →  business logic
    ↓
@Repository      →  database access
    ↓
H2 Database
```

---

## What's Next

- [ ] Toggle task completion (PUT/PATCH)
- [ ] Replace H2 with MySQL
- [ ] Add Spring Security + JWT
- [ ] Deploy — Spring Boot on Railway, React on Vercel
