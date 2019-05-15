package com.carwash.dailytasks;

import org.springframework.data.mongodb.repository.MongoRepository;



public interface DailytaskRepo extends MongoRepository<Dailytask,String> {

}
