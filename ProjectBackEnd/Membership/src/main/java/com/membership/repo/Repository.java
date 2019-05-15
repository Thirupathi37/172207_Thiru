package com.membership.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mebership.model.Membership;



public interface Repository extends MongoRepository<Membership,String> {

}
