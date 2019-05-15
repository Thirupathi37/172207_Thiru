package com.carwash.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class AddVehicleApplication {

	public static void main(String[] args) {
		SpringApplication.run(AddVehicleApplication.class, args);
	}

}
