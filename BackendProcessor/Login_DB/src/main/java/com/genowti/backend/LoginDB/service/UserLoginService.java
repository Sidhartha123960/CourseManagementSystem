package com.genowti.backend.LoginDB.service;


import com.genowti.backend.LoginDB.entity.User;

public interface UserLoginService 
{
      public User createuser(User user);

	  public String checkExist(User user);
}