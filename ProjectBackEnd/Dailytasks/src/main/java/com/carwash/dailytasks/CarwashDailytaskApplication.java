package com.carwash.dailytasks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class CarwashDailytaskApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarwashDailytaskApplication.class, args);
	}

}
