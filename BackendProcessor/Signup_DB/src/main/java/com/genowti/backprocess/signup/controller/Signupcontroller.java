package com.genowti.backprocess.signup.controller;

import java.io.ByteArrayInputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.genowti.backprocess.signup.service.Signupservice;
import com.genowti.backprocess.signup.entity.Signupuser;


@RestController
@CrossOrigin
public class Signupcontroller 
{
       @Autowired         
	   private Signupservice service; 
	 
       @PostMapping("/signup/successfully") 
       public ResponseEntity<Signupuser> insertsignupdata(@RequestBody Signupuser user) 
       {
    	   if(Signupuser.class!=null)
    	   {
    		   return ResponseEntity.status(HttpStatus.ACCEPTED).body(service.insert(user));
    	   }
    	   else
    	   {
              return ResponseEntity.status(HttpStatus.NOT_FOUND).build();     		   
    	   }	   
       }
}