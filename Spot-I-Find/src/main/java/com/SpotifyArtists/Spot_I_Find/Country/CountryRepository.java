package com.SpotifyArtists.Spot_I_Find.Country;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country,  CountryRankId> { //provides crud operations.Country = enetity class(table in database). Each instance of country corresponds to one row in the table. Integer is type of primary key
    void deleteByArtist(String artist); // autoamtic by jpa
    // Optional: find all artists in a specific country
    List<Country> findByIdCountryIgnoreCase(String country);

    // Optional: find a specific row by country and rank
    Optional<Country> findById(CountryRankId id);}
