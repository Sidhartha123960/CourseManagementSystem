package com.genowti.backend.LoginDB.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.genowti.backend.LoginDB.entity.User;
import com.genowti.backend.LoginDB.repository.Userloginrepository;
import com.genowti.backend.LoginDB.Encryption.PasswordEncryptionImpl;
import java.util.*;



@Service
public class UserLoginImpl implements UserLoginService
{
	
	private final Userloginrepository userRepository;

    public UserLoginImpl(Userloginrepository userRepository) 
    {
        this.userRepository = userRepository;
    }
    
   
  	@Override
	public User createuser(User user) 
	{ 	 
		PasswordEncryptionImpl psw = new PasswordEncryptionImpl();
		User both = psw.Passwordprotect(user);
		return userRepository.save(both);
	}
	
 	@Override
	public String checkExist(User user) {
	    Optional<User> existingUser = userRepository.findByEmail(user.getEmail()); 
	    if (existingUser.isPresent()) {
	        return "user already exist";
	    } else {
	        return "user doesn't exist"; 
	    }
	}
}