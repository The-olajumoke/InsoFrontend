package com.pretzl;

import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


public class SpringBootPretzlApplicationTests {

  @Test
  public void contextLoads() {
    String finalSet_id = RandomStringUtils.randomAlphanumeric(7);;
    System.out.println(finalSet_id);
  }

}