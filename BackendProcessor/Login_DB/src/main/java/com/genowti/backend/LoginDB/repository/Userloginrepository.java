package com.genowti.backend.LoginDB.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.genowti.backend.LoginDB.entity.User;

public interface Userloginrepository extends JpaRepository<User, Integer> 
{
	Optional<User> findByEmail(String email); 	
}