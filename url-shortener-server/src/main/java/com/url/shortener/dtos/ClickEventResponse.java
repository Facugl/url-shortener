package com.url.shortener.dtos;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ClickEventResponse {
    private LocalDate clickDate;
    private Long count;
}
