package com.SpotifyArtists.Spot_I_Find.artist;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ArtistDetailService {

    private final ArtistDetailRepository repository;

    @Autowired
    public ArtistDetailService(ArtistDetailRepository repository) {
        this.repository = repository;
    }

    // Get all artist details
    public List<ArtistDetail> getAll() {
        return repository.findAll();
    }

    // Get artist details by country
    public List<ArtistDetail> getByCountry(String countryName) {
        return repository.findByIdCountryNameIgnoreCase(countryName);
    }

    // Get artist details by artist name
    public List<ArtistDetail> getByArtist(String artistName) {
        return repository.findByIdArtistNameIgnoreCase(artistName);
    }

    // Add a new artist detail
    public ArtistDetail addArtistDetail(ArtistDetail detail) {
        repository.save(detail);
        return detail;
    }

    // Update existing artist detail
    public ArtistDetail updateArtistDetail(ArtistDetail updatedDetail) {
        ArtistDetailId id = updatedDetail.getId(); // composite key
        Optional<ArtistDetail> existingDetail = repository.findById(id);

        if (existingDetail.isPresent()) {
            ArtistDetail detailToUpdate = existingDetail.get();

            // Update fields
            detailToUpdate.setTitle(updatedDetail.getTitle());
            detailToUpdate.setStreams(updatedDetail.getStreams());
            // add other fields as needed

            repository.save(detailToUpdate);
            return detailToUpdate;
        }

        return null; // no record found
    }

    // Delete by artist name
    @Transactional
    public void deleteByArtist(String artistName) {
        repository.deleteByIdArtistNameIgnoreCase(artistName);
    }

    // Delete by country
    @Transactional
    public void deleteByCountry(String countryName) {
        repository.deleteByIdCountryNameIgnoreCase(countryName);
    }

    public List<ArtistDetail> searchArtists(String searchText) {
        return repository.findAll().stream()
                .filter(a -> a.getId().getArtistName().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

}
