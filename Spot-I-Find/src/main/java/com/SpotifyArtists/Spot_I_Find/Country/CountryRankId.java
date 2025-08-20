package com.SpotifyArtists.Spot_I_Find.Country;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Embeddable;

@Embeddable
public class CountryRankId implements Serializable {
    private String country;
    private int rank;

    public CountryRankId() {}

    public CountryRankId(String country, int rank) {
        this.country = country;
        this.rank = rank;
    }

    // Getters and setters
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public int getRank() { return rank; }
    public void setRank(int rank) { this.rank = rank; }

    // equals and hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CountryRankId)) return false;
        CountryRankId that = (CountryRankId) o;
        return rank == that.rank && country.equals(that.country);
    }

    @Override
    public int hashCode() {
        return Objects.hash(country, rank);
    }
}
