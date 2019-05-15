package com.carwash.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.carwash.demo.model.VehicleAdd;

public interface Repository extends MongoRepository<VehicleAdd, String>
{

}