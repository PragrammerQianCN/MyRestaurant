package com.ideabobo.model;

import java.io.Serializable;

public class Type implements Serializable {
    private Integer id;

    private String title;

    private String ownid;

    private Integer sid;

    private String shop;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getOwnid() {
        return ownid;
    }

    public void setOwnid(String ownid) {
        this.ownid = ownid == null ? null : ownid.trim();
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public String getShop() {
        return shop;
    }

    public void setShop(String shop) {
        this.shop = shop == null ? null : shop.trim();
    }
}