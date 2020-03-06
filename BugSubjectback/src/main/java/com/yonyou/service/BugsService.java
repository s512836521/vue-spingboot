package com.yonyou.service;

import com.yonyou.dao.entity.Bugs;

import java.util.List;
import java.util.Map;

public interface BugsService {
    void insertBugs(Map icom);
    List<Bugs> queryAllBugs();
}
