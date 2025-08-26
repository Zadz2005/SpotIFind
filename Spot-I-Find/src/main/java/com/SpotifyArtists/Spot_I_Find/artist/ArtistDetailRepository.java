package com.SpotifyArtists.Spot_I_Find.artist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ArtistDetailRepository extends JpaRepository<ArtistDetail, ArtistDetailId> {

    // Find all artists for a given country
    List<ArtistDetail> findByIdCountryNameIgnoreCase(String countryName);

    // Find all songs by an artist
    List<ArtistDetail> findByIdArtistNameIgnoreCase(String artistName);
    @Transactional
    void deleteByIdCountryNameIgnoreCase(String countryName);

    @Transactional
    void deleteByIdArtistNameIgnoreCase(String artistName);

    List<ArtistDetail> findByIdArtistNameContainingIgnoreCase(String searchText);
}
