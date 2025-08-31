package com.SpotifyArtists.Spot_I_Find.Country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//every method returns domain object rather than view
@RequestMapping(path="api/v1/Country")
public class CountryController {
    private final CountryService countryservice;

    @Autowired
    public CountryController(CountryService countryservice) {
        this.countryservice = countryservice;
    }
    @GetMapping
    public List<Country> getCountriesByName(@RequestParam(required = false) String countryName) {
        // Calls the service method to find countries matching the given name
     if(countryName == null || countryName.isEmpty()) {
         return countryservice.getCountry(); //returns all countries
     }
        return countryservice.getCountryByName(countryName); //even if you only writr 4 letters it will show whats left because this goes to repo which uses contains which does partial match
    }
    @PostMapping
    public ResponseEntity<Country> addCountry(@RequestBody Country country) {
        Country createdCountry = countryservice.addCountry(country);
        return new ResponseEntity<>(createdCountry, HttpStatus.CREATED);
    }
@PutMapping
    public ResponseEntity<Country> updateCountry(@RequestBody Country country) {
        Country updatedCountry = countryservice.updateCountry(country);
        if(updatedCountry!= null) {
            return new ResponseEntity<>(updatedCountry, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
}

}
