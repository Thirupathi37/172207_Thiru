package com.carwash.register.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.carwash.register.model.Registration;

public interface RegistrationRepository extends MongoRepository<Registration, String>
{
//	 List<Registration> findByName(String name);
}
