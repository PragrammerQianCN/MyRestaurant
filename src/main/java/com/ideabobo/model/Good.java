package com.ideabobo.model;

import java.io.Serializable;

public class Good implements Serializable {
    private Integer id;

    private String gname;

    private String price;

    private String jifen;

    private String note;

    private String type;

    private String img;

    private Integer count;

    private String typeid;

    private Integer xiaoliang;

    private String ownid;

    private String sid;

    private String shop;

    private String mcount;

    private String saletype;

    private String sale;

    private Integer shouye;

    private Integer zan;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname == null ? null : gname.trim();
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price == null ? null : price.trim();
    }

    public String getJifen() {
        return jifen;
    }

    public void setJifen(String jifen) {
        this.jifen = jifen == null ? null : jifen.trim();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img == null ? null : img.trim();
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getTypeid() {
        return typeid;
    }

    public void setTypeid(String typeid) {
        this.typeid = typeid == null ? null : typeid.trim();
    }

    public Integer getXiaoliang() {
        return xiaoliang;
    }

    public void setXiaoliang(Integer xiaoliang) {
        this.xiaoliang = xiaoliang;
    }

    public String getOwnid() {
        return ownid;
    }

    public void setOwnid(String ownid) {
        this.ownid = ownid == null ? null : ownid.trim();
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid == null ? null : sid.trim();
    }

    public String getShop() {
        return shop;
    }

    public void setShop(String shop) {
        this.shop = shop == null ? null : shop.trim();
    }

    public String getMcount() {
        return mcount;
    }

    public void setMcount(String mcount) {
        this.mcount = mcount == null ? null : mcount.trim();
    }

    public String getSaletype() {
        return saletype;
    }

    public void setSaletype(String saletype) {
        this.saletype = saletype == null ? null : saletype.trim();
    }

    public String getSale() {
        return sale;
    }

    public void setSale(String sale) {
        this.sale = sale == null ? null : sale.trim();
    }

    public Integer getShouye() {
        return shouye;
    }

    public void setShouye(Integer shouye) {
        this.shouye = shouye;
    }

    public Integer getZan() {
        return zan;
    }

    public void setZan(Integer zan) {
        this.zan = zan;
    }
}