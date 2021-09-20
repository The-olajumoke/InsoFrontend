package com.pretzl.repository;

import java.util.Optional;

import com.pretzl.models.ERole;
import com.pretzl.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
