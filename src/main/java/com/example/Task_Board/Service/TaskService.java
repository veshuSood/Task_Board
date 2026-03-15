package com.example.Task_Board.Service;

import com.example.Task_Board.Repositories.TaskRepository;
import com.example.Task_Board.model.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public void deleteTaskById(Integer id){
        taskRepository.deleteById(id);
    }
    public Task createTask(Task task){
        return taskRepository.save(task);
    }
}