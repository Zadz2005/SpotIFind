package com.SpotifyArtists.Spot_I_Find.Country;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> { //provides crud operations
    void deleteByName(String CountryName);
    
    Optional<Country> findByCountryName(String Country);
}
