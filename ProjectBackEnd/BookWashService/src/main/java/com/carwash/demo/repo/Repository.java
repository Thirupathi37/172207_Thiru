package com.carwash.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.carwash.demo.model.Bookwashservice;

public interface Repository extends MongoRepository<Bookwashservice,String>
{

}
