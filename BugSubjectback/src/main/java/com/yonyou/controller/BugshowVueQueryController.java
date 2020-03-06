package com.yonyou.controller;

import com.yonyou.dao.entity.Bugs;
import com.yonyou.service.BugsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/web")
public class BugshowVueQueryController {

    @Autowired
    private BugsService bugsService;

    @PostMapping(value = "queryAllBugs")
    @ResponseBody
    public Map<String,Object> queryAllBugs() {
        List<Bugs> testList = bugsService.queryAllBugs();
        Map<String, Object> bugMsgMap  = new HashMap<String, Object>();
        bugMsgMap.put("errorCode", "0");
        bugMsgMap.put("errorMsg", "");
        bugMsgMap.put("issueBugsInfoList", testList);
        bugMsgMap.put("total", testList.size());
        return bugMsgMap;
    }
}
