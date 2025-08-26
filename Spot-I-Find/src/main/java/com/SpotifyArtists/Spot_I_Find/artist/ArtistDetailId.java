package com.SpotifyArtists.Spot_I_Find.artist;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ArtistDetailId implements Serializable {

    @Column(name = "country_name")
    private String countryName;

    @Column(name = "artist_name")
    private String artistName;

    @Column(name = "title")
    private String title;

    public ArtistDetailId() {}

    public ArtistDetailId(String countryName, String artistName, String title) {
        this.countryName = countryName;
        this.artistName = artistName;
        this.title = title;
    }

    // Getters & setters


    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getArtistName() { return artistName; }
    public void setArtistName(String artistName) { this.artistName = artistName; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    // equals & hashCode (MUST be implemented for composite keys)
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ArtistDetailId)) return false;
        ArtistDetailId that = (ArtistDetailId) o;
        return Objects.equals(countryName, that.countryName) &&
                Objects.equals(artistName, that.artistName) &&
                Objects.equals(title, that.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(countryName, artistName, title);
    }
}
