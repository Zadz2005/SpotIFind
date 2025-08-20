package com.SpotifyArtists.Spot_I_Find.Country;


import jakarta.persistence.*;

@Entity
@Table(name="artists_per_country")
public class Country {

    @EmbeddedId
    private CountryRankId id;



    private String Artist;






    public Country() {
    }

    public Country(CountryRankId id, String artist) {
        this.id = id;
        this.Artist = artist;
    }

    // Getters and setters
    public CountryRankId getId() { return id; }
    public void setId(CountryRankId id) { this.id = id; }

    public String getArtist() { return Artist; }
    public void setArtist(String artist) { this.Artist = artist; }

    // Convenience getters for the composite key fields
    public String getCountry() { return id.getCountry(); }
    public int getRank() { return id.getRank(); }
}

