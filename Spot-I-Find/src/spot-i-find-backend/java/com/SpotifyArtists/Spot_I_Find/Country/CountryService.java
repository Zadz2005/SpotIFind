package com.SpotifyArtists.Spot_I_Find.Country;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

@Component  //telling spring that this class must be managed by spring container
public class CountryService {
    private final CountryRepository countryRepository; //service contains business logic sits between controller and repositor to interact with database

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;

    }

    public List<Country> getCountry() {
        return countryRepository.findAll();
    }

    public List<Country> getCountryByName(String searchText) {
        return countryRepository.findByIdCountryIgnoreCase(searchText); // query by embedded ID field
    }


    //public List<Country> searchArtistsInCountry(String countryName, String searchText) {
    //   return countryRepository.findByIdCountryIgnoreCase(countryName).stream()
    //          .filter(c -> c.getArtist().toLowerCase().contains(searchText.toLowerCase()))
    //        .collect(Collectors.toList());
    //}

    public Country addCountry(Country country) {
        countryRepository.save(country);
        return country;
    }
    public Country updateCountry(Country updatedCountry) {
        CountryRankId id = updatedCountry.getId(); // get composite key
        Optional<Country> existingCountry = countryRepository.findById(id);

        if (existingCountry.isPresent()) {
            Country countryToUpdate = existingCountry.get();

            // Update the artist
            countryToUpdate.setartist(updatedCountry.getartist());

            // Save changes
            countryRepository.save(countryToUpdate);
            return countryToUpdate;
        }

        return null; // No record found
    }
    @Transactional
    public void deleteArtist(String artistName) {
        countryRepository.deleteByartist(artistName);
    }
    @Transactional
    public void deleteCountry(String countryName) {
        countryRepository.deleteByIdCountryIgnoreCase(countryName);
    }



}