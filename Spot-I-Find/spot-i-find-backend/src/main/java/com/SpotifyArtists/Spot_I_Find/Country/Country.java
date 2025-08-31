package com.SpotifyArtists.Spot_I_Find.Country;


import com.fasterxml.jackson.annotation.JsonUnwrapped;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="artists_per_country")
public class Country {

    @EmbeddedId
    @JsonUnwrapped
    private CountryRankId id;



    private String artist;






    public Country() {
    }

    public Country(CountryRankId id, String artist) {
        this.id = id;
        this.artist = artist;
    }

    // Getters and setters
    public CountryRankId getId() { return id; }
    public void setId(CountryRankId id) { this.id = id; }

    public String getartist() { return artist; }
    public void setartist(String Artist) { this.artist = Artist; }

    // Convenience getters for the composite key fields
    public String getCountry() { return id.getCountry(); }
    public int getRank() { return id.getRank(); }
}