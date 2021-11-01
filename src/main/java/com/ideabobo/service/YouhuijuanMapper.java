package com.ideabobo.service;

import com.ideabobo.model.Youhuijuan;

public interface YouhuijuanMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Youhuijuan record);

    int insertSelective(Youhuijuan record);

    Youhuijuan selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Youhuijuan record);

    int updateByPrimaryKey(Youhuijuan record);
}