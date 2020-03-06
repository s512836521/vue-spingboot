package com.yonyou.dao.mapper;


import com.yonyou.dao.entity.Bugs;

import java.util.List;
import java.util.Map;

public interface BugsMapper {
    void insertBugs(Map icom);
    List<Bugs> queryAllBugs();
}
