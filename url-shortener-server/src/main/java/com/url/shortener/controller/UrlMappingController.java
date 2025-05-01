package com.url.shortener.controller;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.url.shortener.dtos.ClickEventResponse;
import com.url.shortener.dtos.UrlMappingResponse;
import com.url.shortener.models.User;
import com.url.shortener.service.UrlMappingService;
import com.url.shortener.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {
    private UrlMappingService urlMappingService;
    private UserService userService;

    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<UrlMappingResponse> createShortUrl(@RequestBody Map<String, String> request,
            Principal principal) {
        String originalUrl = request.get("originalUrl");
        User user = userService.findByUsername(principal.getName());
        UrlMappingResponse urlMappingResponse = urlMappingService.createShortUrl(originalUrl, user);

        return ResponseEntity.status(HttpStatus.OK).body(urlMappingResponse);
    }

    @GetMapping("/my-urls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingResponse>> getUserUrls(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        List<UrlMappingResponse> urls = urlMappingService.getUrlsByUser(user);

        return ResponseEntity.status(HttpStatus.OK).body(urls);
    }

    @GetMapping("/analytics/{short-url}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventResponse>> getUrlAnalytics(
            @PathVariable(name = "short-url") String shortUrl,
            @RequestParam(name = "start-date") String startDate,
            @RequestParam(name = "end-date") String endDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime start = LocalDateTime.parse(startDate, formatter);
        LocalDateTime end = LocalDateTime.parse(endDate, formatter);

        List<ClickEventResponse> clickEventResponse = urlMappingService.getClickEventsByDate(shortUrl, start, end);

        return ResponseEntity.status(HttpStatus.OK).body(clickEventResponse);
    }

    @GetMapping("/total-clicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate, Long>> getTotalClicksByDate(
            Principal principal,
            @RequestParam(name = "start-date") String startDate,
            @RequestParam(name = "end-date") String endDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
        User user = userService.findByUsername(principal.getName());
        LocalDate start = LocalDate.parse(startDate, formatter);
        LocalDate end = LocalDate.parse(endDate, formatter);

        Map<LocalDate, Long> totalClicks = urlMappingService.getTotalClicksByUserAndDate(user, start, end);

        return ResponseEntity.status(HttpStatus.OK).body(totalClicks);
    }

}
