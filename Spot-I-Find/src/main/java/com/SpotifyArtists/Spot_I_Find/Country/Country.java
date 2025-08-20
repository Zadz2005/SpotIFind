package com.SpotifyArtists.Spot_I_Find.Country;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="artists_per_country")
public class Country {

    @Id
    @Column(name="artist_name")
    private String Artist;

    private String Country;

    private int rank;


    public Country() {
    }

    public Country(String Country ) {
        this.Country = Country;
    }

    public String getArtist() {
        return Artist;
    }

    public void setArtist(String artist) {
        Artist = artist;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }
}
