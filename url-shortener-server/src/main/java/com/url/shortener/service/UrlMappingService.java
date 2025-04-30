package com.url.shortener.service;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.url.shortener.dtos.UrlMappingResponse;
import com.url.shortener.models.UrlMapping;
import com.url.shortener.models.User;
import com.url.shortener.repository.UrlMappingRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UrlMappingService {
    private UrlMappingRepository urlMappingRepository;

    public UrlMappingResponse createShortUrl(String originalUrl, User user) {
        String shortUrl = generateShortUrl();

        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setShortUrl(shortUrl);
        urlMapping.setUser(user);
        urlMapping.setCreatedDate(LocalDateTime.now());

        UrlMapping savedUrlMapping = urlMappingRepository.save(urlMapping);

        return toResponse(savedUrlMapping);
    }

    private String generateShortUrl() {
        String characteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();
        StringBuilder shortUrl = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            shortUrl.append(characteres.charAt(random.nextInt(characteres.length())));
        }
        return shortUrl.toString();
    }

    private UrlMappingResponse toResponse(UrlMapping urlMapping) {
        UrlMappingResponse urlMappingResponse = new UrlMappingResponse();
        urlMappingResponse.setId(urlMapping.getId());
        urlMappingResponse.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingResponse.setShortUrl(urlMapping.getShortUrl());
        urlMappingResponse.setClickCount(urlMapping.getClickCount());
        urlMappingResponse.setCreatedDate(urlMapping.getCreatedDate());
        urlMappingResponse.setUsername(urlMapping.getUser().getUsername());

        return urlMappingResponse;
    }

}
