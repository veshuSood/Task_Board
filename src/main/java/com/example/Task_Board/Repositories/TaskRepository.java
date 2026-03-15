package com.example.Task_Board.Repositories;

import com.example.Task_Board.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task,Integer> {

}
