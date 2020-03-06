package com.yonyou.controller;


import com.yonyou.dao.entity.User;
import com.yonyou.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/web")
public class BugfillVueQueryController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "queryAllTestNames")
    @ResponseBody
    public Map<String,Object> queryAllTestNames() {

        List<User> testList = userService.queryAllTestNames();
        List receiverList = userService.queryAllReceiverNames();
        List sysList = userService.queryAllSysNames();
        Map<String, Object> bugMsgMap  = new HashMap<String, Object>();
        bugMsgMap.put("errorCode", "0");
        bugMsgMap.put("errorMsg", "");
        bugMsgMap.put("issueAreaInfoList", testList);
        bugMsgMap.put("issueReceiverInfoList", receiverList);
        bugMsgMap.put("issueSysInfoList", sysList);
        return bugMsgMap;
    }

}
