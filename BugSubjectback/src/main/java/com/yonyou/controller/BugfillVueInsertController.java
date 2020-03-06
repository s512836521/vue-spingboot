package com.yonyou.controller;

import com.yonyou.service.BugsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/web")
public class BugfillVueInsertController {
    @Autowired
    private BugsService bugsService;

    @PostMapping(value = "insertBugs")
    @ResponseBody
    public Map<String,Object> queryAllTestNames(@RequestBody Map params) {

//      List<User> userList = userService.queryAllTestNames();
        Map icom = (Map) params.get("params");
        System.out.println(icom.get("area"));

        bugsService.insertBugs(icom);

        Map<String, Object> returnMap  = new HashMap<String, Object>();
        returnMap.put("errorCode", "0");
        returnMap.put("errorMsg", "");
        return returnMap;
    }
}
