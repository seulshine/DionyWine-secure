package com.ssafy.wine.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ConfigurationProperties(prefix = "file")
public class FileLoadProperties {
	
	private String imgWine;
	private String imgProfile;
	private String imgBackground;
	private String imgFeed;
	
}
