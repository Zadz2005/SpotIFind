package com.SpotifyArtists.Spot_I_Find.artist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/artist-details")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtistDetailController {

    private final ArtistDetailService service;
    @Autowired
    public ArtistDetailController(ArtistDetailService service) {
        this.service = service;
    }
    @GetMapping
    public List<ArtistDetail> getAll(@RequestParam(required = false) String country,
                                     @RequestParam(required = false) String artist,
                                     @RequestParam(required = false) String search) {
        if (country != null) {
            return service.getByCountry(country);
        } else if (artist != null) {
            return service.getByArtist(artist);
        } else if (search != null) {
            return service.searchArtists(search); // 🔍 search all artists
        }
        return service.getAll();
    }

    @PostMapping
    public ArtistDetail create(@RequestBody ArtistDetail detail) {
        return service.addArtistDetail(detail);
    }

    @PutMapping
    public ResponseEntity<ArtistDetail> updateArtistDetail(@RequestBody ArtistDetail detail) {
        ArtistDetail updatedDetail = service.updateArtistDetail(detail);
        if (updatedDetail != null) {
            return new ResponseEntity<>(updatedDetail, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
