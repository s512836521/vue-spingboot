package com.yonyou.controller;

import com.yonyou.dao.entity.User;
import com.yonyou.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/web")
public class UserTestController {
    @Autowired
    private UserService userService;

    @GetMapping("/queryAllTestNames")
    public List<User> queryAllTestNames(){
        return userService.queryAllTestNames();
    }
}
