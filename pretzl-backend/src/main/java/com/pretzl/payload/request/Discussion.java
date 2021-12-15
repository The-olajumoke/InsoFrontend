package com.pretzl.payload.request;

public class Discussion {

    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSetDescription() {
        return setDescription;
    }

    public void setSetDescription(String set_id) {
        this.setDescription = set_id;
    }
    
    private String setDescription;

}
