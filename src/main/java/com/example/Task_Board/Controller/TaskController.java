package com.example.Task_Board.Controller;

import com.example.Task_Board.Repositories.TaskRepository;
import com.example.Task_Board.Service.TaskService;
import com.example.Task_Board.model.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/task")
@RequiredArgsConstructor
public class TaskController {



    private final TaskService taskService;

    @GetMapping("/getAllTasks")
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }
    @PostMapping("/createTask")
    public Task createTasks( @RequestBody Task newTask){
         return taskService.createTask(newTask);
    }
    @DeleteMapping("/deleteTask/{id}")
    public  void  deleteTask(@PathVariable int id){
        taskService.deleteTaskById(id);
    }
}
