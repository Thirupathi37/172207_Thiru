//package com.carwash.demo.BookWashService;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import com.carwash.demo.contoller.Controller;
//import com.carwash.demo.model.Bookwashservice;
//import com.carwash.demo.repo.Repository;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.when;
//
//import java.util.List;
//import java.util.stream.Collector;
//import java.util.stream.Collectors;
//import java.util.stream.Stream;
//
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class BookWashServiceApplicationTests {
//
//	
//    @Autowired
//	private Controller cc;
//    @MockBean
//    private Repository cr;
//
//    
//    @Test
//    public void getAllUsersTest() {
//    	when(cr.findAll()).thenReturn((List<Bookwashservice>) Stream.of(new Bookwashservice("madhu@gmail.com","dfg")).collect(Collectors.toList()));
//    	assertEquals(2,cc.getAllUser().size());
//    }
//}
