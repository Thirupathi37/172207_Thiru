package com.payment.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.payment.payment.model.Customer;


public interface CustomerRepository extends MongoRepository<Customer, String> {


}
