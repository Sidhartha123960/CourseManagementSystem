package com.genowti.backend.LoginDB.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.genowti.backend.LoginDB.entity.User;
import com.genowti.backend.LoginDB.service.UserLoginService;


@RestController
@CrossOrigin
public class UserLoginController 
{

  @Autowired
  private UserLoginService service;

  @PostMapping("/login/successfully")
  public ResponseEntity<User> createUser(@RequestBody User user) {
      User createdUser = service.createuser(user);

      if (createdUser != null) {
          return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
      } else {
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
      }
   }
   
  @PostMapping("/existbyid")
  public ResponseEntity<ExistenceResponse> existbyid(@RequestBody ExistenceRequest request) {
      User user = new User();     
      user.setEmail(request.getEmail());
      String exist = service.checkExist(user);
      
      HttpStatus status = HttpStatus.OK; 
      ExistenceResponse response = new ExistenceResponse(exist);// Default status if user does not exist
      if (exist.equals("user already exist")) {

          return ResponseEntity.status(HttpStatus.OK).body(response);
      }else {
   
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
      }
        
     // ExistenceResponse response = new ExistenceResponse(exist);
     // return ResponseEntity.status(status).body(response);// User exists
      
  }
 
  public static class ExistenceRequest {
      private String email;

      public String getEmail() {
          return email;
      }
      public void setEmail(String email) {
          this.email = email;
      }
  }

  public static class ExistenceResponse {
      private String existence;

      public ExistenceResponse(String existence) {
          this.existence = existence;
      }

      public String getExistence() {
          return existence;
      }

      public void setExistence(String existence) {
          this.existence = existence;
      }
   }
}