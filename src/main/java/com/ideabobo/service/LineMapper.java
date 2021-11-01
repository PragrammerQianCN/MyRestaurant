package com.ideabobo.service;

import com.ideabobo.model.Line;

public interface LineMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Line record);

    int insertSelective(Line record);

    Line selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Line record);

    int updateByPrimaryKey(Line record);
}