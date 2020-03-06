package com.yonyou.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @Author yindwe@yonyou.com
 * @Date 2019/7/26
 * @Description
 */
@RestController
public class TestController {

    @RequestMapping("/hello")
    public String index(){

        return ("hello word");
    }

}
