package com.yonyou.service.impl;

import com.yonyou.dao.entity.Bugs;
import com.yonyou.dao.mapper.BugsMapper;
import com.yonyou.service.BugsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class BugsServicelmpl implements BugsService {

    @Autowired
    private BugsMapper bugsMapper;

    @Override
    public void insertBugs(Map icom) {

        bugsMapper.insertBugs(icom);
    }

    @Override
    public List<Bugs> queryAllBugs() {

        return bugsMapper.queryAllBugs();
    }
}
